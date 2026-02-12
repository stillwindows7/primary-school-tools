# 📚 小学学习工具集

一个专为小学生设计的轻量化学习网页应用集合，包含各类互动工具，帮助孩子在趣味中学习。

## 🌟 特性

- 🎨 **趣味互动** - 动画特效、音效反馈，让学习不再枯燥
- 📱 **移动端优化** - 完美适配手机/平板设备
- 🎨 **中国风设计** - 水墨风格，亲切友好
- 🎓 **渐进式学习** - 难度分级，循序渐进
- 🏆 **成就系统** - 勋章激励，培养成就感

## 🛠️ 技术栈

- **纯前端**: HTML5 + CSS + JavaScript
- **零依赖**: 无需安装，直接浏览器打开即用
- **响应式**: 适配各种屏幕尺寸
- **浏览器支持**: Chrome/Edge/Firefox/Safari等现代浏览器

## 📁 文件结构

```
primary-school-tools/
├── README.md                   # 项目说明文档（本文件）
├── math-practice.html           # 口算练习主页
├── math-practice.css            # 口算练习样式
├── math-practice-data.js         # 口算练习数据配置
└── js/                          # JavaScript 模块目录
    ├── math-practice-state.js      # 状态管理
    ├── math-practice-sound.js       # 音效管理
    ├── math-practice-effects.js     # 粒子特效
    ├── math-practice-badges.js     # 勋章系统
    ├── math-practice-game.js       # 游戏逻辑
    ├── math-practice-levels.js     # 关卡系统
    └── math-practice-main.js       # 主入口
└── chinese-dynasties-timeline.html  # 中国历史时间线
└── chinese-stroke-buddy.html   # 汉字笔划练习
└── poetry-learning.html         # 诗词学习
└── poetry-learning-data.js      # 诗词学习数据
└── ...
```

## 🎯 主要功能模块

### 1. 口算练习 (math-practice.html)

**核心功能**：
- ✅ 四则运算支持（加减乘除）
- ✅ 三种年级选择（一、二、三年级）
- ✅ 三种难度等级
- ✅ 多种练习模式（自由练习/限时/定量/闯关模式）
- ✅ 数字键盘输入 + 实时反馈
- ✅ 精子特效系统（答对庆祝、答错震动）
- ✅ 勋章成就系统
- ✅ 学习进度追踪（积分、题数、正确率）
- ✅ 错题回顾功能

**技术亮点**：
- 模块化JavaScript架构（7个独立模块）
- CSS动画特效（粒子爆炸、彩虹螺旋）
- Web Audio API 实现音效
- Session Storage 本地数据持久化
- 响应式布局设计
- 完整的题目生成算法

---

### 2. 中国历史时间线 (chinese-dynasties-timeline.html)

**核心功能**：
- 📜 可视化展示从夏朝到民国的历史朝代
- 🎨 中国风水墨风格设计
- 📜 滚动时间轴，交互式探索历史

---

### 3. 汉字笔划练习 (chinese-stroke-buddy.html)

**核心功能**：
- ✨ 汉字动画演示
- 🖱️️ 汉字笔划练习模式
- 📝 正确笔画指导
- 🎮 漂亮反馈效果

---

### 4. 诗词学习 (poetry-learning.html)

**核心功能**：
- 📜 古诗词学习模块
- 🎓 学习模式（朗读/背诵/测试）
- 🏆 成就解锁机制

---

## 🛠️ 技术实现细节

### 模块化架构

本项目采用**模块化设计**，每个工具都是独立的 HTML 文件，代码组织清晰：

```
模块间依赖关系：
math-practice.html
    ├── math-practice.css
    ├── math-practice-data.js
    └── js/
        ├── math-practice-state.js      (基础，无依赖)
        ├── math-practice-sound.js       (依赖 state)
        ├── math-practice-effects.js     (无依赖)
        ├── math-practice-badges.js     (依赖 state)
        ├── math-practice-game.js       (依赖 state, sound, effects, badges)
        ├── math-practice-levels.js     (依赖 state, game)
        └── math-practice-main.js       (依赖所有模块)
```

### 命名空间管理

为避免全局变量污染，所有模块都挂载到 `window.MathPractice` 命名空间下：

```javascript
// 模块导出示例
window.MathPractice.state = { /* 状态对象 */ };
window.MathPractice.init = function() { /* 初始化 */ };
window.MathPractice.startPractice = function() { /* 开始练习 */ };
// ...
```

---

## 📋 使用指南

### 快速开始

1. **克隆项目**：
   ```bash
   git clone https://github.com/yourusername/primary-school-tools.git
   cd primary-school-tools
   ```

2. **直接打开**：
   - 双击 `math-practice.html`
   - 或拖入浏览器窗口

### 本地开发

1. **推荐编辑器**：
   - VS Code + Live Server
   - WebStorm / Sublime Text

2. **安装扩展**：
   - Chinese (WordPress) 汉字相关)
   - Live Reload（自动刷新）

### 运行说明

1. **开发模式**：
   ```bash
   # 启动本地服务器
   python -m http.server 8080
   ```

2. **访问地址**：
   - http://localhost:8080/math-practice.html
   ```

---

## 🔧 维护指南

### 常见问题

#### Q: 如何添加新的题型？
**A**: 修改 `math-practice-data.js`:
```javascript
// 在 gradeConfig.grade1.easy 中添加：
{ type: 'mul', range: [1, 9], desc: '1-9乘法' }
```

#### Q: 如何修改难度？
**A**: 修改 `mathConfig.grade1.medium` 等

#### Q: 如何添加新勋章？
**A**: 在 `badges` 数组中添加：
```javascript
{ id: 'custom_badge', icon: '🏆', name: '自定义勋章', desc: '完成某目标' }
```

#### Q: 语音功能已移除
**A**: 所有语音相关代码已清理，保留原有 `soundToggle` 语音鼓励开关

---

## 📊 API 参考

### Web Speech API
```javascript
// 音效生成
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioContext.createOscillator();
const gainNode = audioContext.createGain();

// 语音合成
const utterance = new SpeechSynthesisUtterance();
utterance.lang = 'zh-CN';
window.speechSynthesis.speak(utterance);
```

### Particle System (粒子特效)

- 物理：重力、摩擦力、速度
- 渲染：HTML5 Canvas / DOM 操作
- 动画：requestAnimationFrame
- 效果：多层级粒子系统

---

## 🎨 设计规范

### 配色方案

```css
/* 主色调 */
--primary: #4A90D9    蓝色
--accent: #7ED321    强调色（按钮、高亮）
--success: #7ED321    成功色
--warning: #FF6B6B    警告/错误
--background: 渐变色
```

### 设计原则

1. **大字体易读** - 最小 16px
2. **触摸目标 48x48px** - 适合手指点击
3. **圆角 12-16px** - 友好识别
4. **间距 15px** - 清晰分隔

---

## 🏆 功能扩展建议

### 待实现功能

- [ ] 多语言支持（英语、日语等）
- [ ] 学习报告导出
- [ ] 家长监控面板
- [ ] 打印友享功能
- [ ] 数据备份/同步
- [ ] PWA 支持

---

## 🐛 Bug 反馈

### 已知问题

1. ✅ ~~语音识别已移除~~（Browser support varies）
2. ✅ 模块加载顺序优化
3. ✅ CSS 样式分离完成
4. ✅  命名空间统一

### 优化空间

- [ ] 考虑使用 ES6+ 模块导入
- [ ] 替代 `alert()` 为自定义提示框
- [ ] 提取题算法性能优化

---

## 📜 许可证

MIT License

Copyright (c) 2026 primary-school-tools
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY. TO THE MERCHANTABILITY OF FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## 🤝 与支持

如有问题或建议，欢迎：
- 🐛 Bug Report: https://github.com/yourusername/primary-school-tools/issues
- 💬 Discussion: https://github.com/yourusername/primary-school-tools/discussions
- 📧 Email: your-email@example.com

---

**🎓 让学习变得更有趣！**
