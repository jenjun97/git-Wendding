// info.js

/**
 * 計算高度並發送給父窗口
 */
function sendHeight() {
    var height = document.body.scrollHeight;
    window.parent.postMessage({ type: 'setHeight', height: height }, '*');
}

window.onload = function() {
    sendHeight();
    setInterval(sendHeight, 1000); // 每秒檢查一次高度
};

window.onresize = sendHeight;
