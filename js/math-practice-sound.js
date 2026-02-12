/**
 * math-practice-sound.js
 * 口算练习工具 - 音效管理模块
 * 负责播放音效和语音鼓励
 */

// 创建命名空间
window.MathPractice = window.MathPractice || {};

/**
 * 播放音效
 * @param {string} type - 音效类型 ('correct', 'wrong', 或其他)
 */
function playSound(type) {
    if (!window.MathPractice.state.soundEnabled) return;

    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        if (type === 'correct') {
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.value = 0.3;
        } else if (type === 'wrong') {
            oscillator.frequency.value = 300;
            oscillator.type = 'triangle';
            gainNode.gain.value = 0.2;
        } else {
            oscillator.frequency.value = 600;
            oscillator.type = 'sine';
            gainNode.gain.value = 0.25;
        }

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        // 音频API不支持，静默处理
    }
}

/**
 * 语音鼓励
 * @param {string} text - 要朗读的文字
 */
function speakEncouragement(text) {
    if (!window.MathPractice.state.voiceEnabled || !('speechSynthesis' in window)) return;

    try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        utterance.lang = 'zh-CN';
        utterance.rate = 1.1;
        utterance.pitch = 1.2;
        utterance.volume = 1.0;
        window.speechSynthesis.speak(utterance);
    } catch (e) {
        console.log('语音不支持', e);
    }
}

// 导出模块
window.MathPractice.playSound = playSound;
window.MathPractice.speakEncouragement = speakEncouragement;
