
/**
 * 切換指定區塊的顯示或隱藏，並關閉其他區塊
 * @param {string} sectionId - 區塊的ID
 */
// 切換指定區塊的顯示或隱藏，並關閉其他區塊
function toggleSection(sectionId) {
	// 獲取所有區塊的ID
	const sections = [
		'info',
		'reply',
		'map',
		'reminder'
	];

	sections.forEach(id => {
		const section = document.getElementById(id);
		if (section) {
			if (id === sectionId) {
				if (section.style.display === "none" || section.style.display === "") {
					// 顯示指定區塊
					section.style.display = "block";
				} else {
					// 隱藏指定區塊
					section.style.display = "none";
				}
			} else {
				// 隱藏其他區塊
				section.style.display = "none";
			}
		}
	});
}

/**
 * 用戶代理檢測和iframe加載
 */
//function isMobileDevice() {
//    return /Mobi|Android/i.test(navigator.userAgent);
//}
//
//window.onload = function() {
//    var iframe = document.createElement('iframe');
//    iframe.width = "100%";
//    iframe.height = "2167";
//    iframe.frameBorder = "0";
//    iframe.marginHeight = "0";
//    iframe.marginWidth = "0";
//    iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSdr9AIolvSGjuirBEnJwxHwNWugL1965m8f1Y760y4Uwq5zfQ/viewform?embedded=true";
//
//    // 直接加載iframe而不提示
//    document.getElementById('reply').appendChild(iframe);
//}
// index.js
document.getElementById('google-calendar-btn').addEventListener('click', function() {
    const event = {
        summary: '釗&均之婚宴',
        location: '桃園市平鎮區延平路二段371號',
        description: '聯絡資料\n苦　主　(新郎)：小均 0909-367987\n幸運得主(新娘)：小釗 0918-411-369',
        start: {
            dateTime: '2024-10-19T12:00:00',
            timeZone: 'Asia/Taipei'
        },
        end: {
            dateTime: '2024-10-19T14:00:00',
            timeZone: 'Asia/Taipei'
        },
        reminders: {
            useDefault: false,
            overrides: [
                { method: 'popup', minutes: 30 }
            ]
        }
    };

    const baseURL = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const text = `&text=${encodeURIComponent(event.summary)}`;
    const dates = `&dates=${event.start.dateTime.replace(/-|:|\.\d\d\d/g, '')}/${event.end.dateTime.replace(/-|:|\.\d\d\d/g, '')}`;
    const details = `&details=${encodeURIComponent(event.description)}`;
    const location = `&location=${encodeURIComponent(event.location)}`;
    const reminder = `&reminder=${event.reminders.overrides[0].minutes}M`;

    const url = `${baseURL}${text}${dates}${details}${location}${reminder}`;

    window.open(url, '_blank');
});

