# 🔢 小学教育工具 UI 设计规范

> **版本**：v1.0
> **更新日期**：2025-03-14
> **适用对象**：小学低年级（6-9岁）教育类网页应用

---

## 📋 目录

1. [设计理念](#设计理念)
2. [色彩系统](#色彩系统)
3. [布局规范](#布局规范)
4. [组件设计](#组件设计)
5. [动画效果](#动画效果)
6. [交互设计](#交互设计)
7. [响应式设计](#响应式设计)
8. [代码规范](#代码规范)

---

## 🎨 设计理念

### 核心原则

1. **亲和友好** - 亲切温暖，适合儿童心理
2. **简洁直观** - 操作简单，避免复杂流程
3. **趣味互动** - 手绘风格，增加趣味性
4. **护眼舒适** - 柔和色调，保护视力

### 设计风格

- **作业本美学** - 模拟纸质作业本，营造学习氛围
- **手绘涂鸦** - 不完美线条，增加亲切感
- **木质教具** - 模拟真实教具质感

---

## 🎨 色彩系统

### 主色调

```css
/* 米黄色纸张背景 - 温暖护眼 */
--bg-primary: #f9f4e8;
--bg-secondary: #fffbf0;

/* 大地色系 - 棕色、米色、卡其色 */
--text-primary: #8b4513;      /* 深棕 - 标题 */
--text-secondary: #a0826d;    /* 浅棕 - 副标题 */
--border-color: #e0d8c8;      /* 卡其边框 */
--shadow-color: rgba(180, 170, 150, 0.3); /* 柔和阴影 */
```

### 功能色彩

| 用途 | 颜色 | HEX | 说明 |
|------|------|-----|------|
| **绿色** | 主色 | `#5cb85c` | 设置、确认、正向操作 |
| **橙色** | 辅助 | `#f0ad4e` | 计算、中等优先级 |
| **蓝色** | 信息 | `#5bc0de` | 全部操作、提示 |
| **灰色** | 禁用 | `#d0d0d0` | 清空、次要操作 |
| **粉色** | 强调 | `#e84393` | 标题、重点 |

### 算珠/教学色彩（按位）

```css
--color-ge:  #2196f3; /* 个位 - 蓝 */
--color-shi: #f44336; /* 十位 - 红 */
--color-bai: #4caf50; /* 百位 - 绿 */
--color-qian: #ffc107; /* 千位 - 黄 */
--color-wan:  #ff9800; /* 万位 - 橙 */
```

### 渐变色使用

```css
/* 按钮渐变 - 手绘效果 */
background: linear-gradient(135deg, #5cb85c, #4cae4c);

/* 卡片渐变 - 柔和层次 */
background: linear-gradient(135deg, #fff5f7 0%, #ffffff 100%);
```

---

## 📐 布局规范

### 整体结构

```
┌─────────────────────────────────┐
│           标题区                  │  /* .header */
├─────────────────────────────────┤
│      数字显示 + 操作区            │  /* .number-display */
├─────────────────────────────────┤
│           主内容区                │  /* .abacus-container */
├─────────────────────────────────┤
│         提示消息区                │  /* .message-container */
└─────────────────────────────────┘
```

### 容器样式

```css
/* 主容器 */
.container {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

/* 卡片/容器 */
.card {
    background: #fffbf0;                    /* 米白 */
    padding: 20px 30px;                    /* 舒适内边距 */
    border-radius: 8px;                     /* 柔和圆角 */
    box-shadow: 2px 2px 0 rgba(180, 170, 150, 0.3);  /* 硬阴影 */
    border: 2px solid #e0d8c8;               /* 卡其边框 */
}
```

---

## 🧩 组件设计

### 1. 按钮（手绘风格）

#### 基础按钮

```css
.btn {
    /* 不规则圆角 - 手绘效果 */
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;

    /* 双层边框 - 模拟手绘描边 */
    box-shadow:
        2px 2px 0 rgba(0, 0, 0, 0.1),
        inset 0 -2px 5px rgba(0, 0, 0, 0.1);

    /* 内边框伪元素 */
    &::before {
        content: '';
        position: absolute;
        top: 3px; left: 3px; right: 3px; bottom: 3px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 250px 12px 220px 12px / 12px 220px 12px 250px;
    }

    /* 蜡笔纹理 */
    &::after {
        background: url('data:image/svg+xml,<svg>...</svg>');
        opacity: 0.5;
    }
}
```

#### 按钮颜色变体

```css
.btn-primary   { background: linear-gradient(135deg, #5cb85c, #4cae4c); }  /* 设置 */
.btn-action   { background: linear-gradient(135deg, #f0ad4e, #ec971f); }  /* 计算 */
.btn-info     { background: linear-gradient(135deg, #5bc0de, #31b0d5); }  /* 全部 */
.btn-secondary { background: linear-gradient(255px 15px 225px 15px / 15px 225px 15px 255px,
                                               #d0d0d0, #a09878); }  /* 清空 */
```

#### 操作按钮（小尺寸）

```css
.btn-sm {
    padding: 10px 15px;
    font-size: 1.3em;
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
}
```

#### Hover 效果

```css
.btn:hover {
    transform: translate(-1px, -1px);  /* 轻微上移 */
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.15); /* 增强阴影 */
}

/* 针对不同按钮可有不同旋转角度 */
.btn-primary:hover   { transform: rotate(-1deg) scale(1.02); }
.btn-action:hover    { transform: rotate(-0.5deg) scale(1.02); }
.btn-info:hover      { transform: rotate(0.5deg) scale(1.02); }
```

### 2. 输入框

```css
.input {
    padding: 12px 20px;
    font-size: 1.3em;
    border: 3px solid #d4c8b8;        /* 浅棕边框 */
    border-radius: 8px;                /* 柔和圆角 */
    background: #ffffff;
    text-align: center;
    transition: all 0.2s;
}

.input:focus {
    border-color: #b8a888;
    box-shadow: 0 0 0 3px rgba(180, 170, 150, 0.1);  /* 柔和光晕 */
}
```

### 3. 算珠组件

#### 算珠样式

```css
.bead {
    width: 80px;
    height: 35px;
    border-radius: 50%;                  /* 椭圆形 */
    background: linear-gradient(135deg, #42a5f5, #2196f3);
    box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.3),
        inset 0 2px 4px rgba(255, 255, 255, 0.3),
        inset 0 -2px 4px rgba(0, 0, 0, 0.2);

    /* 高光效果 */
    &::before {
        content: '';
        position: absolute;
        top: 3px; left: 10%;
        width: 80%; height: 40%;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%);
        border-radius: 50%;
    }
}
```

#### 算珠容器（木质）

```css
.bead-container {
    background: linear-gradient(180deg, #8b7355 0%, #a0826d 100%);
    border: 4px solid #6b5a45;               /* 深棕边框 */
    padding: 15px;
    display: flex;
    flex-direction: column-reverse;  /* 从下往上排列 */
    gap: 3px;                             /* 珠子间距 */
}
```

#### 木纹效果

```css
.bead-container::before {
    background: url('data:image/svg+xml,<svg>...</svg>');
    /* SVG 噪点纹理 - 模拟木纹 */
}
```

### 4. 卡片标签

```css
.column-label {
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    font-weight: bold;
}
```

---

## 🎬 动画效果

### 1. 算珠消失动画

```css
@keyframes fadeOut {
    0%   { opacity: 1; transform: scale(1); }
    30%  { opacity: 1; transform: scale(1.2); filter: brightness(1.5); }
    100% { opacity: 0; transform: scale(0) translateY(-50px); }
}

.bead.fade-out {
    animation: fadeOut 1.5s ease forwards;
}
```

### 2. 算珠出现动画

```css
@keyframes fadeIn {
    0%   { opacity: 0; transform: scale(0); }
    50%  { transform: scale(1.2); }
    100% { opacity: 1; transform: scale(1); }
}

.bead.fade-in {
    animation: fadeIn 0.8s ease;
}
```

### 3. 高亮动画

```css
@keyframes highlight {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.column.highlight {
    animation: highlight 0.6s ease;
}
```

### 4. 进位源列动画

```css
@keyframes carryOut {
    0%   { transform: scale(1); }
    25%  { transform: scale(1.1); filter: brightness(1.3); }
    50%  { transform: scale(1.05); }
    75%  { transform: scale(1.1); filter: brightness(1.2); }
    100% { transform: scale(1); }
}
```

### 5. 星星粒子

```javascript
// 星星粒子效果
function createSparkles(x, y, count) {
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '⭐';
        sparkle.style.left = (x + (Math.random() - 0.5) * 100) + 'px';
        sparkle.style.top = (y + (Math.random() - 0.5) * 100) + 'px';
        sparkle.style.fontSize = (15 + Math.random() * 20) + 'px';
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }
}
```

### 动画时长规范

| 动画类型 | 时长 | 用途 |
|---------|------|------|
| 按钮Hover | 0.2s | 快速反馈 |
| 高亮闪烁 | 0.6s | 吸引注意 |
| 算珠消失 | 1.5s | 进位演示 |
| 算珠出现 | 0.8s | 新增算珠 |
| 页面切换 | 0.3s | 流畅过渡 |
| 进位动画 | 1.5s | 完整进位流程 |

---

## 🎮 交互设计

### 按钮交互

```javascript
// 点击反馈
button:active {
    transform: scale(0.95);  /* 轻微缩小 */
}
```

### 输入反馈

```javascript
// 实时计数
input.addEventListener('input', (e) => {
    updateCount(e.target.value.length);
});

// 失去焦点时验证
input.addEventListener('blur', (e) => {
    validateAndFilter(e.target);
});
```

### 教学反馈

1. **文字提示** - 清晰的操作提示
2. **视觉高亮** - 动画吸引注意
3. **延迟显示** - 给学生观察时间
4. **错误提示** - 友好的错误信息

```javascript
// 提示消息示例
showMessage('✏️ 已设置数字为 9');
showMessage('⏸️ 个位有12颗，准备进位...');
showMessage('📊 个位满10颗，向十位进1颗！');
```

---

## 📱 响应式设计

### 断点设置

```css
/* 平板 */
@media (max-width: 768px) {
    .header h1 { font-size: 1.8em; }
    .number-display { flex-direction: row; gap: 15px; }
    .bead-container { width: 80px; min-height: 400px; }
    .bead { width: 55px; height: 25px; }
}

/* 手机 */
@media (max-width: 480px) {
    .number-display { flex-direction: column; gap: 10px; }
    .bead-container { width: 60px; min-height: 350px; }
    .bead { width: 45px; height: 20px; }
    .btn { padding: 8px 15px; font-size: 1em; }
}
```

### 移动端优化

- **触摸友好** - 按钮足够大（最小44x44px）
- **间距充足** - 避免误触
- **字体适配** - 保证可读性
- **横屏支持** - 考虑设备方向

---

## 💻 代码规范

### 命名约定

```javascript
// 常量命名
const MAX_BEADS_AUTO = 10;
const POSITION_NAMES = ['个', '十', '百', '千', '万'];

// 函数命名 - 驼峰命名法
function setNumber() {}
function calculateAdd() {}
function handleBeadClick() {}

// DOM ID - 小驼峰
document.getElementById('numberInput')
document.getElementById('numberValue')

// CSS 类名 - 连字符
.number-display
.input-area
.operation-btn
```

### 文件结构

```
project-name.html          # 单文件 HTML
├── <style>              # 样式定义
├── <body>               # 页面内容
│   ├── <div class="header">
│   ├── <div class="number-display">
│   ├── <div class="abacus-container">
│   └── <div class="message-container">
└── <script>             # 逻辑代码
    ├── 全局变量
    ├── 工具函数
    ├── 核心逻辑
    └── 事件监听
```

### 注释规范

```javascript
/**
 * 函数功能说明
 * @param {type} paramName 参数说明
 * @returns {type} 返回值说明
 */

// 单行注释 - 解释关键逻辑
// TODO: 待实现功能
// FIXME: 需要修复的问题
```

---

## 🎯 快速开始模板

### HTML 模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📚 页面标题</title>
    <style>
        /* 复制粘贴设计系统样式 */
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Microsoft YaHei', 'SimHei', Arial, sans-serif;
            background-color: #f9f4e8;
            background-image:
                linear-gradient(rgba(200, 190, 170, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(200, 190, 170, 0.3) 1px, transparent 1px);
            background-size: 20px 20px;
            min-height: 100vh;
            padding: 20px;
        }
    </style>
</head>
<body>
    <!-- 页面内容 -->
</body>
</html>
```

### 核心样式片段

```css
/* 主容器 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

/* 卡片 */
.card {
    background: #fffbf0;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 2px 2px 0 rgba(180, 170, 150, 0.3);
    border: 2px solid #e0d8c8;
}
```

---

## 📝 设计检查清单

### 发布前检查

- [ ] 色彩符合主题
- [ ] 字体大小适合目标年龄段
- [ ] 按钮有足够点击区域（44x44px）
- [ ] 移动端测试通过
- [ ] 无障碍访问（alt、label等）
- [ ] 加载速度优化
- [ ] 错误提示友好

### 一致性检查

- [ ] 按钮样式统一
- [ ] 间距保持一致
- [ ] 圆角大小统一
- [ ] 阴影效果统一
- [ ] 动画时长统一

---

## 📚 参考资料

### 设计灵感
- 传统纸质作业本
- 木质教学教具
- 儿童绘本插图
- 手绘艺术风格

### 配色工具
- [Coolors.co](https://coolors.co) - 配色方案生成
- [Material Design Colors](https://material.io/design/color) - 配色参考

### 图标资源
- [Font Awesome](https://fontawesome.com) - 图标库
- [Emojipedia](https://emojipedia.org) - 表情符号
- [Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji) - 彩色表情

---

**文档维护**：如有新增页面，请及时更新此设计规范，确保风格统一。
