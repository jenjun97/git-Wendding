
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

