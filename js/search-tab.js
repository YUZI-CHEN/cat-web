

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
