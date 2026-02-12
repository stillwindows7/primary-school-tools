/**
 * math-practice-levels.js
 * 口算练习工具 - 关卡系统模块
 * 负责闯关模式的关卡渲染和启动
 */

// 创建命名空间
window.MathPractice = window.MathPractice || {};

/**
 * 渲染关卡网格
 */
function renderLevelGrid() {
    const state = window.MathPractice.state;
    const grid = document.getElementById('levelGrid');
    const levels = levelConfig[state.grade];

    document.getElementById('levelGradeTitle').textContent = gradeConfig[state.grade].name + '关卡';

    grid.innerHTML = levels.map((level, index) => {
        const completed = state.levelsCompleted[`${state.grade}_${level.level}`];
        const locked = index > 0 && !state.levelsCompleted[`${state.grade}_${index}`];

        return `
            <div class="level-card ${locked ? 'locked' : ''} ${completed ? 'completed' : ''}"
                 onclick="${locked ? '' : `MathPractice.levels.startLevel(${level.level})`}">
                <div class="level-number">${level.level}</div>
                <div class="level-name">${level.name}</div>
                <div class="level-stars">
                    ${completed ? '⭐'.repeat(completed.stars || 1) : '☆☆☆'}
                </div>
            </div>
        `;
    }).join('');
}

/**
 * 启动关卡
 * @param {number} levelNum - 关卡编号
 */
function startLevel(levelNum) {
    const state = window.MathPractice.state;
    const level = levelConfig[state.grade][levelNum - 1];
    state.currentLevel = levelNum;
    state.countOption = level.questionCount;
    state.mode = level.timeLimit ? 'timed' : 'count';
    state.timedOption = level.timeLimit || 300;

    window.MathPractice.game.startPractice();
}

// 导出模块
window.MathPractice.levels = {
    renderLevelGrid,
    startLevel
};
