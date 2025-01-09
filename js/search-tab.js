
// function toggleLine(lineId) {
//   // 隱藏所有捷運線
//   const lines = document.querySelectorAll('.line-group');
//   lines.forEach(line => line.classList.remove('active'));

//   // 如果選中的捷運線已經顯示，則隱藏它；否則顯示
//   const selectedLine = document.getElementById(lineId);
//   if (selectedLine && !selectedLine.classList.contains('active')) {
//     selectedLine.classList.add('active');
//   }
// }

// function toggleDimBackground(isDimmed) {
//   const bgElement = document.querySelector('.bg');
//   if (isDimmed) {
//     bgElement.classList.add('dimmed');
//   } else {
//     bgElement.classList.remove('dimmed');
//   }
// }

// function toggleTag(tagElement) {
//   const isSelected = tagElement.classList.toggle('selected');
//   const lineId = tagElement.getAttribute('data-line-id');

//   // 切換背景暗淡狀態
//   toggleDimBackground(isSelected);

//   // 如果選中標籤，顯示對應捷運線；否則隱藏所有
//   if (isSelected) {
//     toggleLine(lineId);
//   } else {
//     toggleLine(null); // 無參數，隱藏所有捷運線
//   }
// }
function toggleLine(lineId, isSelected) {
  const selectedLine = document.getElementById(lineId);

  // 根據選擇狀態顯示或隱藏對應捷運線
  if (selectedLine) {
    if (isSelected) {
      selectedLine.classList.add('active');
    } else {
      selectedLine.classList.remove('active');
    }
  }
}

function toggleDimBackground() {
  const bgElement = document.querySelector('.bg');
  const anySelected = document.querySelectorAll('.tag.selected').length > 0;

  // 如果有選中標籤，背景變暗；否則恢復正常
  if (anySelected) {
    bgElement.classList.add('dimmed');
  } else {
    bgElement.classList.remove('dimmed');
  }
}

function toggleTag(tagElement) {
  const isSelected = tagElement.classList.toggle('selected');
  const lineId = tagElement.getAttribute('data-line-id');

  // 切換對應捷運線的顯示狀態
  toggleLine(lineId, isSelected);

  // 更新背景暗淡狀態
  toggleDimBackground();
}
