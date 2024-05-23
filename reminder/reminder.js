document.getElementById('reminderButton').addEventListener('click', function() {
    // 設置事件信息
    const title = '釗+均喜宴';
    const startTime = '20241019T040000Z'; // UTC時間，中午12點是UTC+8:00
    const endTime = '20241019T060000Z'; // 兩小時後
    const location = '324桃園市平鎮區延平路二段371號';
    const details = '聯絡人-謝政均 0909-367987';

    // 生成Google Calendar URL
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

    // 在新標籤頁打開URL
    window.open(url, '_blank');
});
