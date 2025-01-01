// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
  // 隱藏所有 tabcontent
  const tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach(content => (content.style.display = "none"));

  // 移除所有按鈕的 active 樣式
  const tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach(link => link.classList.remove("active"));

  // 顯示當前的 tabcontent
  document.getElementById(cityName).style.display = "block";

  // 添加 active 樣式
  evt.currentTarget.classList.add("active");
}

// 預設開啟 London 標籤
document.getElementById("defaultOpen").click();