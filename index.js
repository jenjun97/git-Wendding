// 動態調整iframe高度
window.addEventListener('message', function(event) {
    if (event.data.type === 'setHeight') {
        const iframe = document.getElementById('infoIframe');
        if (iframe) {
            iframe.style.height = event.data.height + 'px';
        }
    }
});

// 現有的JavaScript代碼...

/**
 * 切換指定區塊的顯示或隱藏，並關閉其他區塊
 * @param {string} sectionId - 區塊的ID
 */
function toggleSection(sectionId) {
    // 獲取所有區塊的ID
    const sections = [
        'info',
        'story',
        'aboutus',
        'wedding-album',
        'reply',
        'map',
        'reminder',
        'share',
        'guest-album'
    ];

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            if (id === sectionId) {
                // 切換指定區塊的顯示狀態
                if (section.style.display === "none" || section.style.display === "") {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            } else {
                // 隱藏其他區塊
                section.style.display = "none";
            }
        }
    });
}
