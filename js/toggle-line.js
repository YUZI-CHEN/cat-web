// 切換背景暗淡狀態
function toggleDimBackground(isDimmed) {
  const bgElement = document.querySelector('.bg');
  if (bgElement) {
    // 使用 classList.toggle，根據 isDimmed 值來添加或移除 .dimmed 類
    bgElement.classList.toggle('dimmed', isDimmed);
  }
}

// 切換標籤選中狀態
function toggleTag(tagElement) {
  const isSelected = tagElement.classList.toggle('selected');
  const lineId = tagElement.getAttribute('data-line-id');

  // 檢查是否有任何標籤被選中
  const anyTagSelected = document.querySelectorAll('.tag.selected').length > 0;

  // 切換背景暗淡狀態
  toggleDimBackground(anyTagSelected);

  // 顯示或隱藏對應的捷運線
  toggleLine(isSelected ? lineId : null);
}

// 切換顯示或隱藏捷運線
function toggleLine(lineId) {
  const lines = document.querySelectorAll('.line-group');
  lines.forEach(line => line.classList.remove('active'));

  if (lineId) {
    const selectedLine = document.getElementById(lineId);
    if (selectedLine) {
      selectedLine.classList.add('active');
    }
  }
}

// 等待 DOM 加載完成後設置背景初始透明度
document.addEventListener('DOMContentLoaded', () => {
  const bgElement = document.querySelector('.bg');
  if (bgElement) {
    bgElement.style.opacity = '1'; // 明確設置初始透明度
  }

  // 綁定標籤的點擊事件
  const tagElements = document.querySelectorAll('.tag');
  tagElements.forEach(tag => {
    tag.addEventListener('click', () => {
      toggleTag(tag);
    });
  });
});