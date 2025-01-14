const yellowLineData=[
  {
    "id":"Zhongyuan",
    "station":"中原站",
    "title":"貓樂貓咖啡 中和環球店",
    "time":"周一~周日:11:00~22:00",
    "address":"新北市中和區中山路三段122號",
    "tel":"(02)22217108", 
    "fb":"https://www.facebook.com/catfuncafe",
    "map":"https://maps.app.goo.gl/B4CuTiBmGQFiUv1d7",
    "other":"品種貓、很多貓",
    "tags": ["店貓"],

    },
];

// 1. 綁定黃線標籤點擊事件
document.querySelectorAll(".yellow-tag").forEach(tag => {
  tag.addEventListener("click", yellowTagHandler); // 綁定特定處理器
});

// 2. 綁定黃線地圖點擊事件
document.querySelectorAll(".yellow-point").forEach(point => {
  point.addEventListener("click", yellowPointHandler); // 綁定特定處理器
});

// 3. 顯示黃線資訊的函數
function displayYellowInfos(infos) {

  const infoContent = document.getElementById("tab4_content");

  if (infos.length > 0) {
    infoContent.innerHTML = ""; // 清空之前的內容
    infos.forEach(info => {
      const icons = `
        <div class="icon">
          ${info.web ? `<a href="${info.web}" target="_blank"><img src="./img/web.png" alt="網站"></a>` : ""}
          ${info.fb ? `<a href="${info.fb}" target="_blank"><img src="./img/facebook.png" alt="fb"></a>` : ""}
          ${info.instagram ? `<a href="${info.instagram}" target="_blank"><img src="./img/instagram (1).png" alt="instagram"></a>` : ""}
          ${info.tiktok ? `<a href="${info.tiktok}" target="_blank"><img src="./img/social-media (2).png" alt="tiktok"></a>` : ""}
          ${info.map ? `<a href="${info.map}" target="_blank"><img src="./img/pin.png" alt="map"></a>` : ""}
        </div>
      `;
      infoContent.innerHTML += `
        <div class="info-item">
          <h3>${info.title} (${info.station})</h3>
          <hr class="title-hr">
          <p><strong>營業時間：</strong>${info.time}</p>
          <p><strong>地址：</strong>${info.address}</p>
          <p><strong>電話：</strong>${info.tel}</p>
          <p><strong>其他：</strong>${info.other}</p>
          <p><strong>標籤：</strong>${info.tags.join(", ")}</p>
          ${icons}
        </div>
        <hr>
      `;
    });
    // infoBox.style.display = "block";
  } else {
    infoContent.innerHTML = "<p>沒有找到相關的地點。</p>";
    // infoBox.style.display = "block";
  }
}

// 4. 定義事件處理器
function yellowTagHandler(e) {
  const selectedTag = e.target.dataset.tag;
  const filteredInfos = yellowLineData.filter(item => item.tags.includes(selectedTag));
  displayYellowInfos(filteredInfos);
}

function yellowPointHandler(e) {
  const id = e.target.dataset.id;
  const infos = yellowLineData.filter(item => item.id === id);
  displayYellowInfos(infos);
}