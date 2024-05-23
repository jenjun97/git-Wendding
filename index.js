/**
 * 切换指定区块的显示或隐藏，并关闭其他区块
 * @param {string} sectionId - 区块的ID
 */
function toggleSection(sectionId) {
    // 获取所有区块的ID
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
                // 切换指定区块的显示状态
                if (section.style.display === "none" || section.style.display === "") {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            } else {
                // 隐藏其他区块
                section.style.display = "none";
            }
        }
    });
}

// 动态调整iframe高度
window.addEventListener('message', function(event) {
    if (event.data.type === 'setHeight') {
        const iframe = document.getElementById('infoIframe');
        if (iframe) {
            iframe.style.height = event.data.height + 'px';
        }
    } else if (event.data.type === 'setHeightReply') {
        const section = document.getElementById('reply');
        if (section) {
            section.style.height = event.data.height + 'px';
        }
    }
});




