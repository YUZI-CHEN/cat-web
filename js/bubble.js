var BubbleAnimationEffect = function () {
  $('.bubble-circle').animate({
    borderTopLeftRadius: String(Math.round(Math.random() * 200 + 350) + 'px'),
    borderTopRightRadius: String(Math.round(Math.random() * 200 + 350) + 'px'),
    borderBottomLeftRadius: String(Math.round(Math.random() * 200 + 350) + 'px'),
    borderBottomRightRadius: String(Math.round(Math.random() * 200 + 350) + 'px'),
  }, 1000, BubbleAnimationEffect);
};
BubbleAnimationEffect();

// 替换成图片 URL
var BgImages = [
  ' url("./img/PXL_20240427_080152111.MP.jpg")',
  ' url("./img/PXL_20240823_050455626.MP.jpg")',
  ' url("./img/PXL_20241009_082846677.MP.jpg")',

];

var i = 0;
var BubbleEffect = function () {
  if (i < BgImages.length) {
    $(".bubble-circle").css("background-image", BgImages[i]);
  } else {
    i = 0;
  }
  i++;
};
setInterval(BubbleEffect, 3750);