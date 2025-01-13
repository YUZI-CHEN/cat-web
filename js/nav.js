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

function openCity(evt, cityId) {
  // 隱藏所有的內容區塊
  const contentSections = document.getElementsByClassName("search");
  for (let i = 0; i < contentSections.length; i++) {
      contentSections[i].style.display = "none";
  }

  // 移除所有標籤的 "active" 樣式
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // 顯示選中的內容區塊，並設置標籤為 "active"
  const targetSection = document.getElementById(cityId);
  if (targetSection) {
      targetSection.style.display = "block";
      evt.currentTarget.className += " active";
  } else {
      console.error(`Element with id "${cityId}" not found.`);
  }
}

// 預設打開的標籤
document.getElementById("defaultOpen").click();