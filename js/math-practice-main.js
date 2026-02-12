/**
 * math-practice-main.js
 * 口算练习工具 - 主入口模块
 * 负责初始化、视图切换、事件绑定等
 */

// 创建命名空间
window.MathPractice = window.MathPractice || {};

/**
 * 初始化应用
 */
function init() {
    // 检查数据文件是否加载成功
    if (typeof mathConfig === 'undefined') {
        alert('数据文件加载失败，请刷新页面重试！');
        console.error('mathConfig 未定义，请检查 math-practice-data.js 是否正确加载');
        return;
    }

    if (typeof gradeConfig === 'undefined') {
        alert('数据文件加载失败，请刷新页面重试！');
        console.error('gradeConfig 未定义，请检查 math-practice-data.js 是否正确加载');
        return;
    }

    console.log('数据加载成功', { mathConfig, gradeConfig, badges });

    window.MathPractice.loadSession();
    window.MathPractice.updateUserInfo();
    setupEventListeners();
    window.MathPractice.renderBadgeWall();
}

/**
 * 设置事件监听器
 */
function setupEventListeners() {
    const state = window.MathPractice.state;

    // 昵称修改
    document.getElementById('nicknameInput').addEventListener('change', (e) => {
        state.nickname = e.target.value || state.nickname;
        window.MathPractice.saveSession();
        window.MathPractice.updateUserInfo();
    });

    // 音效开关
    document.getElementById('soundToggle').addEventListener('change', (e) => {
        state.soundEnabled = e.target.checked;
        window.MathPractice.saveSession();
    });

    // 语音开关
    document.getElementById('voiceToggle').addEventListener('change', (e) => {
        state.voiceEnabled = e.target.checked;
        window.MathPractice.saveSession();
    });

    // 回车提交
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && document.getElementById('practiceView').classList.contains('active')) {
            window.MathPractice.submitAnswer();
        }
    });
}

/**
 * 切换视图
 * @param {string} viewName - 视图名称
 */
function showView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewName + 'View').classList.add('active');

    if (viewName === 'level') {
        window.MathPractice.levels.renderLevelGrid();
    }
}

/**
 * 返回首页
 */
function goHome() {
    window.MathPractice.stopPractice();
    showView('home');
}

/**
 * 选择年级
 * @param {string} grade - 年级ID
 */
function selectGrade(grade) {
    const state = window.MathPractice.state;
    state.grade = grade;
    document.querySelectorAll('.grade-card').forEach(c => c.classList.remove('selected'));
    document.querySelector('[data-grade="' + grade + '"]').classList.add('selected');
    window.MathPractice.updateUserInfo();
}

/**
 * 选择模式
 * @param {string} mode - 模式ID
 */
function selectMode(mode) {
    const state = window.MathPractice.state;
    state.mode = mode;
    document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
    document.querySelector('[data-mode="' + mode + '"]').classList.add('selected');

    // 显示/隐藏选项
    document.getElementById('timedOptions').classList.remove('active');
    document.getElementById('countOptions').classList.remove('active');
    document.getElementById('difficultySelector').style.display = mode === 'practice' ? 'block' : 'none';

    if (mode === 'level') {
        showView('level');
    }
}

/**
 * 选择难度
 * @param {string} difficulty - 难度ID
 */
function selectDifficulty(difficulty) {
    const state = window.MathPractice.state;
    state.difficulty = difficulty;
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
    document.querySelector('.diff-btn.' + difficulty).classList.add('selected');
}

/**
 * 选择限时选项
 */
function selectTimedOption(value) {
    const state = window.MathPractice.state;
    state.timedOption = value;
    document.querySelectorAll('#timedBtns .option-btn').forEach(b => b.classList.remove('selected'));
    if (window.event && window.event.target) {
        window.event.target.classList.add('selected');
    }
}

/**
 * 选择定量选项
 */
function selectCountOption(value) {
    const state = window.MathPractice.state;
    state.countOption = value;
    document.querySelectorAll('#countBtns .option-btn').forEach(b => b.classList.remove('selected'));
    if (window.event && window.event.target) {
        window.event.target.classList.add('selected');
    }
}

// 导出模块
window.MathPractice.init = init;
window.MathPractice.setupEventListeners = setupEventListeners;
window.MathPractice.showView = showView;
window.MathPractice.goHome = goHome;
window.MathPractice.selectGrade = selectGrade;
window.MathPractice.selectMode = selectMode;
window.MathPractice.selectDifficulty = selectDifficulty;
window.MathPractice.selectTimedOption = selectTimedOption;
window.MathPractice.selectCountOption = selectCountOption;

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', () => {
    window.MathPractice.init();
});