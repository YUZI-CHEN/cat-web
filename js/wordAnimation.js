const titleWords = document.querySelectorAll('.title-word');

titleWords.forEach((word, index) => {
  word.addEventListener('mouseover', () => {
    word.style.animation = `wave 0.5s ${index * 0.1}s infinite ease-in-out, color-animation 2s infinite`;
  });

  word.addEventListener('mouseout', () => {
    word.style.animation = ''; // 移除动画
  });
});