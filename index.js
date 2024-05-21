/**
 * 切換指定區塊的顯示或隱藏
 * @param {string} sectionId - 區塊的ID
 */
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // 檢查區塊的顯示狀態，進行顯示或隱藏的切換
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}
