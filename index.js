
// 切換指定區塊的顯示或隱藏，並關閉其他區塊
function toggleSection(sectionId) {
	// 定義所有區塊的ID
	const sections = ['info', 'reply', 'map'];

	// 獲取要切換的區塊
	let sectionToToggle = document.getElementById(sectionId);
	// 判斷該區塊是否顯示
	let isSectionVisible = sectionToToggle.style.display === "block";
	// 用於標識是否再次點擊同一區塊
	let isSameSectionClicked = false;

	// 遍歷所有區塊的ID
	sections.forEach(id => {
		// 獲取區塊的元素
		const section = document.getElementById(id);
		if (section) {
			if (id === sectionId) {
				// 如果是要切換的區塊
				if (section.style.display === "none" || section.style.display === "") {
					// 如果區塊目前是隱藏的，顯示該區塊
					section.style.display = "block";
					// 滾動到該區塊
					section.scrollIntoView({ behavior: "smooth" });
				} else {
					// 如果區塊目前是顯示的，隱藏該區塊
					section.style.display = "none";
					// 標記為再次點擊同一區塊
					isSameSectionClicked = true;
				}
			} else {
				// 隱藏其他區塊
				section.style.display = "none";
			}
		}
	});

	// 如果是隱藏同一區塊，滾動到頁面頂端
	if (isSameSectionClicked) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
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

