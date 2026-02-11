// 口算练习工具 - 数据配置文件
// 包含年级配置、题型配置、勋章系统、头像主题等

// ==================== 年级配置 ====================
const gradeConfig = {
    grade1: {
        name: '一年级',
        icon: '🌱',
        color: '#7ED321',
        description: '适合6-7岁小朋友'
    },
    grade2: {
        name: '二年级',
        icon: '🌿',
        color: '#4A90D9',
        description: '适合7-8岁小朋友'
    },
    grade3: {
        name: '三年级',
        icon: '🌳',
        color: '#A78BFA',
        description: '适合8-9岁小朋友'
    }
};

// ==================== 题型配置（按年级+难度）====================
const mathConfig = {
    // 一年级
    grade1: {
        easy: [
            { type: 'add', range: [0, 10], desc: '10以内加法' },
            { type: 'sub', range: [0, 10], desc: '10以内减法' }
        ],
        medium: [
            { type: 'add', range: [0, 20], desc: '20以内加法' },
            { type: 'sub', range: [0, 20], desc: '20以内减法' }
        ],
        hard: [
            { type: 'add', range: [0, 100], onlyTen: true, desc: '100以内整十数加法' },
            { type: 'sub', range: [0, 100], onlyTen: true, desc: '100以内整十数减法' }
        ]
    },
    // 二年级
    grade2: {
        easy: [
            { type: 'add', range: [0, 50], desc: '50以内加法' },
            { type: 'sub', range: [0, 50], desc: '50以内减法' }
        ],
        medium: [
            { type: 'add', range: [0, 100], desc: '100以内加法' },
            { type: 'sub', range: [0, 100], desc: '100以内减法' },
            { type: 'mul', range: [1, 9], desc: '表内乘法' }
        ],
        hard: [
            { type: 'mul', range: [1, 9], desc: '表内乘法进阶' },
            { type: 'div', range: [1, 9], desc: '表内除法' }
        ]
    },
    // 三年级
    grade3: {
        easy: [
            { type: 'add', range: [10, 100], desc: '两位数加法' },
            { type: 'sub', range: [10, 100], desc: '两位数减法' }
        ],
        medium: [
            { type: 'add', range: [100, 1000], desc: '三位数加法' },
            { type: 'sub', range: [100, 1000], desc: '三位数减法' },
            { type: 'mul', range: [2, 9], desc: '乘法进阶' }
        ],
        hard: [
            { type: 'mixed', range: [0, 1000], desc: '综合混合运算' }
        ]
    }
};

// ==================== 难度配置 ====================
const difficultyConfig = {
    easy: {
        name: '简单',
        icon: '😊',
        color: '#7ED321',
        passRate: 0.7,  // 通关需70%正确率
        timeBonus: 1.0  // 时间系数
    },
    medium: {
        name: '中等',
        icon: '🤔',
        color: '#FFD93D',
        passRate: 0.8,  // 通关需80%正确率
        timeBonus: 1.2
    },
    hard: {
        name: '困难',
        icon: '💪',
        color: '#FF6B6B',
        passRate: 0.9,  // 通关需90%正确率
        timeBonus: 1.5
    }
};

// ==================== 闯关配置 ====================
// 每年级10关，难度递增
const levelConfig = {
    grade1: [
        { level: 1, difficulty: 'easy', questionCount: 10, timeLimit: null, name: '初出茅庐', desc: '10以内加减法' },
        { level: 2, difficulty: 'easy', questionCount: 15, timeLimit: null, name: '小试牛刀', desc: '10以内加减法' },
        { level: 3, difficulty: 'easy', questionCount: 20, timeLimit: null, name: '渐入佳境', desc: '10以内加减法' },
        { level: 4, difficulty: 'medium', questionCount: 10, timeLimit: null, name: '勇往直前', desc: '20以内加减法' },
        { level: 5, difficulty: 'medium', questionCount: 15, timeLimit: null, name: '步步高升', desc: '20以内加减法' },
        { level: 6, difficulty: 'medium', questionCount: 20, timeLimit: null, name: '熟能生巧', desc: '20以内加减法' },
        { level: 7, difficulty: 'hard', questionCount: 10, timeLimit: 180, name: '整十挑战', desc: '整十数加减（限时3分钟）' },
        { level: 8, difficulty: 'hard', questionCount: 15, timeLimit: 240, name: '速算达人', desc: '整十数加减（限时4分钟）' },
        { level: 9, difficulty: 'hard', questionCount: 20, timeLimit: 300, name: '口算高手', desc: '整十数加减（限时5分钟）' },
        { level: 10, difficulty: 'mixed', questionCount: 30, timeLimit: 300, name: '一年级冠军', desc: '综合挑战（限时5分钟）' }
    ],
    grade2: [
        { level: 1, difficulty: 'easy', questionCount: 10, timeLimit: null, name: '起步学习', desc: '50以内加减法' },
        { level: 2, difficulty: 'easy', questionCount: 15, timeLimit: null, name: '稳步前进', desc: '50以内加减法' },
        { level: 3, difficulty: 'medium', questionCount: 10, timeLimit: null, name: '乘法入门', desc: '100以内加减+乘法' },
        { level: 4, difficulty: 'medium', questionCount: 15, timeLimit: null, name: '乘法进阶', desc: '100以内加减+乘法' },
        { level: 5, difficulty: 'medium', questionCount: 20, timeLimit: null, name: '除法初探', desc: '100以内加减+乘除法' },
        { level: 6, difficulty: 'medium', questionCount: 25, timeLimit: null, name: '运算熟练', desc: '100以内加减+乘除法' },
        { level: 7, difficulty: 'hard', questionCount: 15, timeLimit: 180, name: '速度挑战', desc: '表内乘除（限时3分钟）' },
        { level: 8, difficulty: 'hard', questionCount: 20, timeLimit: 240, name: '准确率挑战', desc: '表内乘除（限时4分钟）' },
        { level: 9, difficulty: 'hard', questionCount: 25, timeLimit: 300, name: '综合测试', desc: '100以内综合（限时5分钟）' },
        { level: 10, difficulty: 'mixed', questionCount: 30, timeLimit: 300, name: '二年级冠军', desc: '综合挑战（限时5分钟）' }
    ],
    grade3: [
        { level: 1, difficulty: 'easy', questionCount: 10, timeLimit: null, name: '两位数运算', desc: '两位数加减法' },
        { level: 2, difficulty: 'easy', questionCount: 15, timeLimit: null, name: '运算提升', desc: '两位数加减法' },
        { level: 3, difficulty: 'medium', questionCount: 10, timeLimit: null, name: '三位数入门', desc: '三位数加减法' },
        { level: 4, difficulty: 'medium', questionCount: 15, timeLimit: null, name: '三位数进阶', desc: '三位数加减法' },
        { level: 5, difficulty: 'medium', questionCount: 20, timeLimit: null, name: '乘法精通', desc: '三位数加减+乘法' },
        { level: 6, difficulty: 'medium', questionCount: 25, timeLimit: null, name: '综合运算', desc: '三位数加减+乘法' },
        { level: 7, difficulty: 'hard', questionCount: 15, timeLimit: 180, name: '限时挑战', desc: '综合运算（限时3分钟）' },
        { level: 8, difficulty: 'hard', questionCount: 20, timeLimit: 240, name: '速算精英', desc: '综合运算（限时4分钟）' },
        { level: 9, difficulty: 'hard', questionCount: 25, timeLimit: 300, name: '口算大师', desc: '综合运算（限时5分钟）' },
        { level: 10, difficulty: 'mixed', questionCount: 30, timeLimit: 300, name: '三年级冠军', desc: '终极挑战（限时5分钟）' }
    ]
};

// ==================== 勋章系统 ====================
const badges = [
    // 基础勋章
    { id: 'first', name: '初学者', icon: '🌱', desc: '完成第一题', rarity: 'common' },
    { id: 'ten', name: '十题达成', icon: '🔟', desc: '累计完成10题', rarity: 'common' },
    { id: 'fifty', name: '五十题达人', icon: '⭐', desc: '累计完成50题', rarity: 'uncommon' },
    { id: 'hundred', name: '百题王者', icon: '💯', desc: '累计完成100题', rarity: 'rare' },

    // 连击勋章
    { id: 'streak3', name: '三连胜', icon: '🔥', desc: '连续答对3题', rarity: 'common' },
    { id: 'streak5', name: '五连胜', icon: '💫', desc: '连续答对5题', rarity: 'uncommon' },
    { id: 'streak10', name: '连胜新星', icon: '⭐', desc: '连续答对10题', rarity: 'rare' },
    { id: 'streak20', name: '连胜大师', icon: '🌟', desc: '连续答对20题', rarity: 'epic' },

    // 速度勋章
    { id: 'speed', name: '闪电侠', icon: '⚡', desc: '10秒内答对5题', rarity: 'rare' },
    { id: 'speed10', name: '极速者', icon: '🚀', desc: '60秒内答对10题', rarity: 'epic' },

    // 准确率勋章
    { id: 'accuracy90', name: '精准射手', icon: '🎯', desc: '单次练习正确率90%+', rarity: 'uncommon' },
    { id: 'accuracy100', name: '完美主义者', icon: '👑', desc: '单次练习全对', rarity: 'rare' },

    // 年级勋章
    { id: 'grade1_easy', name: '一年级小能手', icon: '🎓', desc: '通关一年级简单', rarity: 'common' },
    { id: 'grade1_all', name: '一年级冠军', icon: '🏆', desc: '通关一年级全部关卡', rarity: 'epic' },
    { id: 'grade2_easy', name: '二年级小能手', icon: '🎓', desc: '通关二年级简单', rarity: 'common' },
    { id: 'grade2_all', name: '二年级冠军', icon: '🏆', desc: '通关二年级全部关卡', rarity: 'epic' },
    { id: 'grade3_easy', name: '三年级小能手', icon: '🎓', desc: '通关三年级简单', rarity: 'common' },
    { id: 'grade3_all', name: '三年级冠军', icon: '🏆', desc: '通关三年级全部关卡', rarity: 'epic' },

    // 特殊勋章
    { id: 'comeback', name: '逆袭之星', icon: '💪', desc: '错题重练全对', rarity: 'uncommon' },
    { id: 'night', name: '夜猫子', icon: '🦉', desc: '晚上10点后完成练习', rarity: 'common' },
    { id: 'early', name: '早起鸟', icon: '🐦', desc: '早上7点前完成练习', rarity: 'common' }
];

// 勋章稀有度配置
const badgeRarity = {
    common: { name: '普通', color: '#A0A0A0', bgColor: 'rgba(160, 160, 160, 0.1)' },
    uncommon: { name: '优秀', color: '#7ED321', bgColor: 'rgba(126, 211, 33, 0.1)' },
    rare: { name: '稀有', color: '#4A90D9', bgColor: 'rgba(74, 144, 217, 0.1)' },
    epic: { name: '史诗', color: '#A78BFA', bgColor: 'rgba(167, 139, 250, 0.1)' },
    legendary: { name: '传说', color: '#FFD93D', bgColor: 'rgba(255, 217, 61, 0.1)' }
};

// ==================== 头像配置 ====================
const avatars = [
    { id: 'bear', icon: '🐻', name: '小熊', cost: 0, default: true },
    { id: 'rabbit', icon: '🐰', name: '小兔', cost: 50, default: false },
    { id: 'cat', icon: '🐱', name: '小猫', cost: 100, default: false },
    { id: 'dog', icon: '🐶', name: '小狗', cost: 100, default: false },
    { id: 'panda', icon: '🐼', name: '熊猫', cost: 200, default: false },
    { id: 'fox', icon: '🦊', name: '小狐狸', cost: 200, default: false },
    { id: 'lion', icon: '🦁', name: '小狮子', cost: 300, default: false },
    { id: 'robot', icon: '🤖', name: '机器人', cost: 500, default: false },
    { id: 'unicorn', icon: '🦄', name: '独角兽', cost: 500, default: false },
    { id: 'dragon', icon: '🐲', name: '小龙', cost: 1000, default: false }
];

// ==================== 主题配置 ====================
const themes = [
    { id: 'default', name: '默认', background: 'linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)', cost: 0 },
    { id: 'forest', name: '森林', background: 'linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)', cost: 200 },
    { id: 'ocean', name: '海洋', background: 'linear-gradient(135deg, #B3E5FC 0%, #81D4FA 100%)', cost: 200 },
    { id: 'sunset', name: '日落', background: 'linear-gradient(135deg, #FFE0B2 0%, #FFCC80 100%)', cost: 300 },
    { id: 'space', name: '太空', background: 'linear-gradient(135deg, #7C4DFF 0%, #651FFF 100%)', cost: 500 },
    { id: 'rainbow', name: '彩虹', background: 'linear-gradient(135deg, #FFB6C1 0%, #87CEEB 50%, #98FB98 100%)', cost: 1000 }
];

// ==================== 陪伴角色配置 ====================
const companions = [
    { id: 'none', icon: '', name: '无', cost: 0, default: true },
    { id: 'bear', icon: '🐻', name: '小熊', cost: 100, default: false },
    { id: 'rabbit', icon: '🐰', name: '小兔', cost: 100, default: false },
    { id: 'star', icon: '⭐', name: '星星', cost: 200, default: false }
];

// ==================== 鼓励语配置 ====================
const encouragements = {
    correct: [
        '太棒了！🎉',
        '答对了！✨',
        '你真厉害！👏',
        '继续加油！💪',
        '完美！🌟',
        '好样的！😊',
        '太聪明了！🧠',
        '继续保持！🔥'
    ],
    wrong: [
        '加油！再试试 💪',
        '没关系，下次一定行！😊',
        '相信你可以的！✨',
        '别灰心，继续努力！🌟',
        '再想想，你可以的！💪'
    ],
    streak: {
        3: '厉害！连对3题！🔥',
        5: '太棒了！连对5题！💫',
        10: '不可思议！连对10题！⭐',
        20: '你是天才吗？！连对20题！🏆'
    }
};

// ==================== 练习模式配置 ====================
const practiceModes = [
    { id: 'timed', name: '限时模式', icon: '⏱️', desc: '在限定时间内答题' },
    { id: 'count', name: '定量模式', icon: '📊', desc: '完成指定数量的题目' },
    { id: 'free', name: '自由练习', icon: '🎮', desc: '无限制，随时停止' }
];

// 限时模式选项
const timedOptions = [
    { value: 60, label: '1分钟' },
    { value: 180, label: '3分钟' },
    { value: 300, label: '5分钟' }
];

// 定量模式选项
const countOptions = [
    { value: 10, label: '10题' },
    { value: 20, label: '20题' },
    { value: 30, label: '30题' }
];

// ==================== 积分规则 ====================
const scoreRules = {
    correct: 10,        // 答对一题基础分
    streak3: 5,         // 连对3题额外分
    streak5: 15,        // 连对5题额外分
    streak10: 30,       // 连对10题额外分
    levelComplete: 50,  // 通关奖励
    perfect: 100        // 全对奖励
};

// ==================== 随机昵称 ====================
const randomNicknames = [
    '快乐小熊', '聪明兔子', '勇敢小狮', '智慧小猫',
    '活泼小狗', '可爱熊猫', '灵动小鹿', '机灵小猴',
    '勇敢小虎', '快乐小鸟', '聪明海豚', '勇敢小鲸',
    '数学小天才', '口算小达人', '速算小能手', '智慧小博士'
];

// ==================== 导出数据 ====================
// 如果需要用于其他页面，可以导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        gradeConfig,
        mathConfig,
        difficultyConfig,
        levelConfig,
        badges,
        badgeRarity,
        avatars,
        themes,
        companions,
        encouragements,
        practiceModes,
        timedOptions,
        countOptions,
        scoreRules,
        randomNicknames
    };
}
