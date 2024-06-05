// 設定倒數計時的目標日期和時間
var targetDate = new Date('2024-06-06T08:59:59');
var timerId = null;

// 格式化時間顯示
function formatTime(time) {
    document.getElementById('timer').style.color = 'black';
    var days = Math.floor(time / (3600 * 24));
    var hours = Math.floor((time % (3600 * 24)) / 3600);
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = time % 60;
    return days + ':' + ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
}

// 更新計時器
function updateTimer() {
    var now = new Date();
    var timeLeft = Math.floor((targetDate - now) / 1000);

    // 如果時間到，顯示紅色00:00:00
    if (timeLeft <= 0) {
        document.getElementById('timer').innerHTML = '00天 00:00:00';
        document.getElementById('timer').style.color = 'red';
        clearInterval(timerId);
        return;
    }

    document.getElementById('timer').innerHTML = formatTime(timeLeft);
}

// 開始計時器
function startTimer() {
    if (timerId === null) {
        timerId = setInterval(updateTimer, 1000);
    }
}

// 自動開始倒數計時
startTimer();
