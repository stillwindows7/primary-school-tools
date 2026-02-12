/**
 * math-practice-game.js
 * 口算练习工具 - 游戏逻辑模块
 * 负责题目生成、练习流程、答题处理等核心游戏逻辑
 */

// 创建命名空间
window.MathPractice = window.MathPractice || {};

/**
 * 生成随机数
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} 随机数
 */
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 生成题目
 * @returns {Object} 题目对象 {num1, num2, answer, question, type}
 */
function generateQuestion() {
    const state = window.MathPractice.state;

    // 确保数据已加载
    if (!mathConfig || !mathConfig[state.grade] || !mathConfig[state.grade][state.difficulty]) {
        console.error('数据配置未加载，使用默认配置');
        // 使用默认配置
        return {
            num1: 5,
            num2: 3,
            answer: 8,
            question: '5 + 3 = ?',
            type: 'add'
        };
    }

    const config = mathConfig[state.grade][state.difficulty];
    const questionType = config[Math.floor(Math.random() * config.length)];

    let num1, num2, answer, question;

    switch (questionType.type) {
        case 'add':
            num1 = randomInRange(questionType.range[0], questionType.range[1]);
            num2 = randomInRange(questionType.range[0], questionType.range[1]);
            if (questionType.onlyTen) {
                num1 = Math.round(num1 / 10) * 10 || 10;
                num2 = Math.round(num2 / 10) * 10 || 10;
            }
            answer = num1 + num2;
            question = `${num1} + ${num2} = ?`;
            break;

        case 'sub':
            num1 = randomInRange(questionType.range[0], questionType.range[1]);
            num2 = randomInRange(questionType.range[0], questionType.range[1]);
            if (questionType.onlyTen) {
                num1 = Math.round(num1 / 10) * 10 || 10;
                num2 = Math.round(num2 / 10) * 10 || 10;
            }
            // 确保结果非负
            if (num1 < num2) [num1, num2] = [num2, num1];
            answer = num1 - num2;
            question = `${num1} - ${num2} = ?`;
            break;

        case 'mul':
            num1 = randomInRange(questionType.range[0], questionType.range[1]);
            num2 = randomInRange(questionType.range[0], questionType.range[1]);
            answer = num1 * num2;
            question = `${num1} × ${num2} = ?`;
            break;

        case 'div':
            num2 = randomInRange(questionType.range[0], questionType.range[1]);
            answer = randomInRange(questionType.range[0], questionType.range[1]);
            num1 = num2 * answer;
            question = `${num1} ÷ ${num2} = ?`;
            break;

        case 'mixed':
            // 随机选择前面的类型
            return generateQuestion();
    }

    return { num1, num2, answer, question, type: questionType.type };
}

/**
 * 开始练习
 */
function startPractice() {
    const state = window.MathPractice.state;
    console.log('startPractice 被调用', { grade: state.grade, difficulty: state.difficulty });

    // 再次检查数据是否已加载
    if (typeof mathConfig === 'undefined') {
        alert('数据文件未加载，请刷新页面重试！');
        return;
    }

    state.questionCount = 0;
    state.correctCount = 0;
    state.streak = 0;
    state.currentAnswer = '';
    state.startTime = Date.now();
    state.wrongQuestions = [];

    // 清空输入
    document.getElementById('answerInput').value = '';
    document.getElementById('encouragement').textContent = '';

    // 生成第一题
    nextQuestion();

    window.MathPractice.showView('practice');

    // 启动计时器
    if (state.mode === 'timed') {
        state.timeLeft = state.timedOption;
        startTimer();
    } else {
        updateTimerDisplay();
        state.timer = setInterval(updateTimerDisplay, 1000);
    }
}

/**
 * 下一题
 */
function nextQuestion() {
    const state = window.MathPractice.state;
    state.currentQuestion = generateQuestion();
    state.currentAnswer = '';
    document.getElementById('question').textContent = state.currentQuestion.question;
    document.getElementById('question').classList.remove('correct', 'wrong');
    document.getElementById('answerInput').value = '';
    document.getElementById('answerInput').classList.remove('correct', 'wrong');
    document.getElementById('encouragement').textContent = '';
    document.getElementById('progressText').textContent = `第 ${state.questionCount + 1} 题`;

    // 自动朗读题目
    if (state.autoReadQuestion) {
        setTimeout(() => {
            window.MathPractice.speakQuestion();
        }, 500);
    }
}

/**
 * 输入数字
 * @param {number} num - 输入的数字
 */
function inputNumber(num) {
    const state = window.MathPractice.state;
    const input = document.getElementById('answerInput');
    if (state.currentAnswer.length < 5) {
        state.currentAnswer += num;
        input.value = state.currentAnswer;
        input.classList.remove('correct', 'wrong');
    }
}

/**
 * 清除答案
 */
function clearAnswer() {
    const state = window.MathPractice.state;
    state.currentAnswer = '';
    document.getElementById('answerInput').value = '';
    document.getElementById('answerInput').classList.remove('correct', 'wrong');
}

/**
 * 提交答案
 */
function submitAnswer() {
    const state = window.MathPractice.state;
    if (!state.currentAnswer && state.currentAnswer !== 0) return;

    const userAnswer = parseInt(state.currentAnswer);
    const correctAnswer = state.currentQuestion.answer;
    const isCorrect = userAnswer === correctAnswer;

    state.questionCount++;
    state.totalQuestions++;

    const questionEl = document.getElementById('question');
    const inputEl = document.getElementById('answerInput');

    if (isCorrect) {
        // 答对
        state.correctCount++;
        state.totalCorrect++;
        state.streak++;
        if (state.streak > state.maxStreak) state.maxStreak = state.streak;

        // 计分
        let score = scoreRules.correct;
        if (state.streak >= 3) score += scoreRules.streak3;
        if (state.streak >= 5) score += scoreRules.streak5;
        if (state.streak >= 10) score += scoreRules.streak10;
        state.score += score;
        document.getElementById('scoreText').textContent = `积分: ${state.score}`;

        // 视觉反馈
        questionEl.classList.add('correct');
        inputEl.classList.add('correct');

        // 鼓励语
        const encouragementsList = encouragements.correct;
        document.getElementById('encouragement').textContent =
            encouragementsList[Math.floor(Math.random() * encouragementsList.length)];

        // 连击显示
        if (state.streak >= 3 && encouragements.streak[state.streak]) {
            showStreak(encouragements.streak[state.streak]);
        }

        window.MathPractice.playSound('correct');
        window.MathPractice.showCelebration();

        // 检查勋章
        window.MathPractice.checkBadges();

        // 延迟后下一题
        setTimeout(() => {
            if (shouldContinue()) {
                nextQuestion();
            } else {
                finishPractice();
            }
        }, 1000);

    } else {
        // 答错
        state.streak = 0;

        // 记录错题
        state.wrongQuestions.push({
            question: state.currentQuestion.question,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer
        });

        // 视觉反馈
        questionEl.classList.add('wrong');
        inputEl.classList.add('wrong');

        // 播放错题特效
        window.MathPractice.showWrongFeedback();

        // 鼓励语
        const encouragementsList = encouragements.wrong;
        document.getElementById('encouragement').textContent =
            encouragementsList[Math.floor(Math.random() * encouragementsList.length)];

        window.MathPractice.playSound('wrong');

        // 延迟后继续
        setTimeout(() => {
            if (shouldContinue()) {
                nextQuestion();
            } else {
                finishPractice();
            }
        }, 1500);
    }

    window.MathPractice.saveSession();
}

/**
 * 判断是否继续练习
 * @returns {boolean}
 */
function shouldContinue() {
    const state = window.MathPractice.state;
    if (state.mode === 'count') {
        return state.questionCount < state.countOption;
    }
    if (state.mode === 'timed') {
        return state.timeLeft > 0;
    }
    return true; // 自由模式
}

/**
 * 启动计时器
 */
function startTimer() {
    const state = window.MathPractice.state;
    const timerEl = document.getElementById('timer');
    state.timer = setInterval(() => {
        state.timeLeft--;
        const minutes = Math.floor(state.timeLeft / 60);
        const seconds = state.timeLeft % 60;
        timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (state.timeLeft <= 0) {
            finishPractice();
        }
    }, 1000);
}

/**
 * 更新计时器显示
 */
function updateTimerDisplay() {
    const state = window.MathPractice.state;
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('timer').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

/**
 * 显示连击信息
 * @param {string} text - 连击文字
 */
function showStreak(text) {
    const streakEl = document.getElementById('streakDisplay');
    streakEl.textContent = text;
    streakEl.classList.add('show');
    setTimeout(() => streakEl.classList.remove('show'), 2000);
}

/**
 * 停止练习
 */
function stopPractice() {
    const state = window.MathPractice.state;
    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
    }
}

/**
 * 完成练习
 */
function finishPractice() {
    const state = window.MathPractice.state;
    stopPractice();

    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const accuracy = state.questionCount > 0
        ? Math.round((state.correctCount / state.questionCount) * 100)
        : 0;

    // 显示结果
    document.getElementById('resultCount').textContent = state.questionCount;
    document.getElementById('resultCorrect').textContent = state.correctCount;
    document.getElementById('resultAccuracy').textContent = accuracy + '%';
    document.getElementById('resultTime').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // 新获得的勋章
    const newBadges = window.MathPractice.checkNewBadges();
    if (newBadges.length > 0) {
        document.getElementById('newBadgesSection').style.display = 'block';
        document.getElementById('newBadgesList').innerHTML = newBadges.map(badge =>
            `<div class="badge-item">
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-name">${badge.name}</span>
            </div>`
        ).join('');
    } else {
        document.getElementById('newBadgesSection').style.display = 'none';
    }

    // 错题展示
    if (state.wrongQuestions.length > 0) {
        document.getElementById('wrongQuestionsSection').style.display = 'block';
        document.getElementById('wrongQuestionsList').innerHTML = state.wrongQuestions.map((q, i) =>
            `<div class="wrong-item">
                <div class="wrong-content">
                    <div class="wrong-question">${q.question}</div>
                    <div class="wrong-answer">你的答案: ${q.userAnswer} | 正确答案: ${q.correctAnswer}</div>
                </div>
            </div>`
        ).join('');
    } else {
        document.getElementById('wrongQuestionsSection').style.display = 'none';
    }

    window.MathPractice.saveSession();
    window.MathPractice.showView('result');
}

// 导出模块
window.MathPractice.game = {
    generateQuestion,
    randomInRange,
    startPractice,
    nextQuestion,
    inputNumber,
    clearAnswer,
    submitAnswer,
    shouldContinue,
    startTimer,
    updateTimerDisplay,
    showStreak,
    stopPractice,
    finishPractice
};

// 同时将函数直接挂载到命名空间，便于HTML中的onclick调用
window.MathPractice.generateQuestion = generateQuestion;
window.MathPractice.randomInRange = randomInRange;
window.MathPractice.startPractice = startPractice;
window.MathPractice.nextQuestion = nextQuestion;
window.MathPractice.inputNumber = inputNumber;
window.MathPractice.clearAnswer = clearAnswer;
window.MathPractice.submitAnswer = submitAnswer;
window.MathPractice.shouldContinue = shouldContinue;
window.MathPractice.startTimer = startTimer;
window.MathPractice.updateTimerDisplay = updateTimerDisplay;
window.MathPractice.showStreak = showStreak;
window.MathPractice.stopPractice = stopPractice;
window.MathPractice.finishPractice = finishPractice;
