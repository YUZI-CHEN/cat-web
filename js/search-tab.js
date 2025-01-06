
// function toggleDimBackground(isDimmed) {
//   const bgElement = document.querySelector('.bg');
//   if (isDimmed) {
//     bgElement.classList.add('dimmed'); // 增加 dimmed 類
//   } else {
//     bgElement.classList.remove('dimmed'); // 移除 dimmed 類
//   }
// }

// function toggleTag(tagElement) {
//   const isSelected = tagElement.classList.toggle('selected');
//   const lineId = tagElement.getAttribute('data-line-id');

//   // 檢查是否有任何標籤被選中
//   const anyTagSelected = document.querySelectorAll('.tag.selected').length > 0;

//   // 切換背景暗淡狀態
//   toggleDimBackground(anyTagSelected);

//   // 顯示或隱藏對應的捷運線
//   if (isSelected) {
//     toggleLine(lineId);
//   } else {
//     toggleLine(null); // 如果未選中任何標籤，隱藏所有捷運線
//   }
// }

// function toggleLine(lineId) {
//   // 隱藏所有捷運線
//   const lines = document.querySelectorAll('.line-group');
//   lines.forEach(line => line.classList.remove('active'));

//   // 顯示選中的捷運線
//   const selectedLine = document.getElementById(lineId);
//   if (selectedLine) {
//     selectedLine.classList.add('active');
//   }
// }
// document.addEventListener('DOMContentLoaded', () => {
//   const bgElement = document.querySelector('.bg');
//   bgElement.style.opacity = '1'; // 明確設置初始透明度
// });
// 切換背景的暗淡狀態
function toggleDimBackground(isDimmed) {
  const bgElement = document.querySelector('.bg');
  bgElement.classList.toggle('dimmed', isDimmed);
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
  bgElement.style.opacity = '1'; // 明確設置初始透明度
});