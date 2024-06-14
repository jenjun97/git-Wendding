
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

// google行事曆
document.getElementById('google-calendar-btn').addEventListener('click', function() {
	const event = {
		summary: '姻釗Angel&政均Jun婚宴日',
		location: '324桃園市平鎮區延平路二段371號',
		description: '姻釗Angel&政均Jun婚宴日\n\n新人-(苦主)謝政均 Jun\n電話：0909-367987\n\n新人-(幸運得主)：陳姻釗 Angel\n電話：0918-411369\n\n日期：2024年10月19日 星期六\n時間：中午 12:00\n\n會館：Amour阿沐\n地址：324桃園市平鎮區延平路二段371號\n電話：03-495 - 1375',
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

	// 檢測是否為手機裝置
	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	if (isMobile) {
		// 手機版URL
		window.location.href = url;
	} else {
		// 電腦版URL
		window.open(url, '_blank');
	}
});

// iphone行事曆
document.getElementById('iphone-calendar-btn').addEventListener('click', function() {
    const isIphone = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isIphone) {
        const title = "姻釗Angel&政均Jun婚宴日";
        const location = "324桃園市平鎮區延平路二段371號";
        const notes = "姻釗Angel&政均Jun婚宴日\n\n新人-(苦主)謝政均 Jun\n電話：0909-367987\n\n新人-(幸運得主)：陳姻釗 Angel\n電話：0918-411369\n\n日期：2024年10月19日 星期六\n時間：中午 12:00\n\n會館：Amour阿沐\n地址：324桃園市平鎮區延平路二段371號\n電話：03-495 - 1375";
        const startDate = "20241019T120000";
        const endDate = "20241019T140000";

        const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
UID:${new Date().getTime()}@example.com
DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '')}
ORGANIZER;CN=Your Name:MAILTO:yourname@example.com
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${title}
LOCATION:${location}
DESCRIPTION:${notes}
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icsContent.trim()], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'event.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    } else {
        alert("此功能僅在 iPhone 上可用。");
    }
});
