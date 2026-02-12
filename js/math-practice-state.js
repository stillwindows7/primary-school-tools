/**
 * math-practice-state.js
 * 口算练习工具 - 状态管理模块
 * 负责全局状态的定义、加载和保存
 */

// 创建命名空间
window.MathPractice = window.MathPractice || {};

// ==================== 全局状态 ====================
const state = {
    // 用户设置
    grade: 'grade1',
    mode: 'practice',
    difficulty: 'easy',
    timedOption: 60,
    countOption: 10,

    // 用户数据
    nickname: '',
    avatar: '🐻',
    score: 0,
    totalQuestions: 0,
    totalCorrect: 0,
    maxStreak: 0,

    // 当前练习
    currentQuestion: null,
    currentAnswer: '',
    questionCount: 0,
    correctCount: 0,
    streak: 0,
    startTime: null,
    timer: null,
    timeLeft: 0,

    // 闯关数据
    currentLevel: 1,
    levelsCompleted: {},

    // 收集的数据
    earnedBadges: [],
    wrongQuestions: [],

    // 设置
    soundEnabled: true,
    voiceEnabled: false,

    // 陪伴角色
    companion: 'none'
};

// ==================== 会话管理 ====================

/**
 * 从 sessionStorage 加载用户数据
 */
function loadSession() {
    const saved = sessionStorage.getItem('mathPractice');
    if (saved) {
        const data = JSON.parse(saved);
        Object.assign(state, data);
    }

    // 生成随机昵称
    if (!state.nickname) {
        state.nickname = randomNicknames[Math.floor(Math.random() * randomNicknames.length)];
    }
}

/**
 * 保存用户数据到 sessionStorage
 */
function saveSession() {
    const dataToSave = {
        grade: state.grade,
        nickname: state.nickname,
        avatar: state.avatar,
        score: state.score,
        totalQuestions: state.totalQuestions,
        totalCorrect: state.totalCorrect,
        maxStreak: state.maxStreak,
        earnedBadges: state.earnedBadges,
        levelsCompleted: state.levelsCompleted,
        wrongQuestions: state.wrongQuestions,
        soundEnabled: state.soundEnabled,
        voiceEnabled: state.voiceEnabled,
        companion: state.companion
    };
    sessionStorage.setItem('mathPractice', JSON.stringify(dataToSave));
}

/**
 * 更新页面上的用户信息显示
 */
function updateUserInfo() {
    // 头部用户信息
    document.getElementById('userAvatar').textContent = state.avatar;
    document.getElementById('userNameDisplay').textContent = state.nickname;
    document.getElementById('userGradeDisplay').textContent = gradeConfig[state.grade].name;
    document.getElementById('totalScore').textContent = state.score;
    document.getElementById('totalQuestions').textContent = state.totalQuestions;

    // 个人中心
    document.getElementById('profileAvatar').textContent = state.avatar;
    document.getElementById('nicknameInput').value = state.nickname;
    document.getElementById('profileScore').textContent = state.score;
    document.getElementById('profileQuestions').textContent = state.totalQuestions;
    document.getElementById('profileAccuracy').textContent =
        state.totalQuestions > 0 ? Math.round((state.totalCorrect / state.totalQuestions) * 100) + '%' : '0%';
    document.getElementById('profileStreak').textContent = state.maxStreak;

    // 设置开关
    document.getElementById('soundToggle').checked = state.soundEnabled;
    document.getElementById('voiceToggle').checked = state.voiceEnabled;

    // 陪伴角色
    document.getElementById('companion').textContent =
        state.companion !== 'none' ? companions.find(c => c.id === state.companion)?.icon || '' : '';
}

// 导出模块
window.MathPractice.state = state;
window.MathPractice.loadSession = loadSession;
window.MathPractice.saveSession = saveSession;
window.MathPractice.updateUserInfo = updateUserInfo;
