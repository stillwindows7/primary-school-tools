/**
 * math-practice-badges.js
 * 口算练习工具 - 勋章系统模块
 * 负责勋章检查、获得和展示
 */

// 创建命名空间
window.MathPractice = window.MathPractice || {};

/**
 * 检查是否获得新勋章
 */
function checkBadges() {
    const state = window.MathPractice.state;

    // 初学者
    if (state.totalQuestions === 1) earnBadge('first');
    if (state.totalQuestions >= 10) earnBadge('ten');
    if (state.totalQuestions >= 50) earnBadge('fifty');
    if (state.totalQuestions >= 100) earnBadge('hundred');

    // 连击
    if (state.streak >= 3) earnBadge('streak3');
    if (state.streak >= 5) earnBadge('streak5');
    if (state.streak >= 10) earnBadge('streak10');
    if (state.streak >= 20) earnBadge('streak20');

    // 准确率
    if (state.questionCount >= 5) {
        const accuracy = (state.correctCount / state.questionCount) * 100;
        if (accuracy >= 90) earnBadge('accuracy90');
        if (accuracy === 100) earnBadge('accuracy100');
    }
}

/**
 * 检查新获得的勋章（用于结果显示）
 * @returns {Array} 新获得的勋章列表
 */
function checkNewBadges() {
    const state = window.MathPractice.state;
    return state.earnedBadges.filter(badge =>
        badges.find(b => b.id === badge && !badge.seen)
    );
}

/**
 * 获得勋章
 * @param {string} badgeId - 勋章ID
 */
function earnBadge(badgeId) {
    const state = window.MathPractice.state;
    if (!state.earnedBadges.includes(badgeId)) {
        state.earnedBadges.push(badgeId);
    }
}

/**
 * 渲染勋章墙
 */
function renderBadgeWall() {
    const state = window.MathPractice.state;
    const badgeWall = document.getElementById('badgeWall');
    badgeWall.innerHTML = badges.map(badge => {
        const earned = state.earnedBadges.includes(badge.id);
        const rarity = badgeRarity[badge.rarity];
        return `
            <div class="badge-cell ${earned ? 'earned' : ''}" title="${badge.name}: ${badge.desc}">
                <div class="icon">${badge.icon}</div>
                <div class="name">${badge.name}</div>
            </div>
        `;
    }).join('');
}

/**
 * 清除错题记录
 */
function clearWrongQuestions() {
    if (confirm('确定要清除所有错题记录吗？')) {
        const state = window.MathPractice.state;
        state.wrongQuestions = [];
        window.MathPractice.saveSession();
        alert('错题记录已清除！');
    }
}

// 导出模块
window.MathPractice.checkBadges = checkBadges;
window.MathPractice.checkNewBadges = checkNewBadges;
window.MathPractice.earnBadge = earnBadge;
window.MathPractice.renderBadgeWall = renderBadgeWall;
window.MathPractice.clearWrongQuestions = clearWrongQuestions;
