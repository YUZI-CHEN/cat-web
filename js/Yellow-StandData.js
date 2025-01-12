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

// 绑定事件
document.querySelectorAll(".point").forEach((point) => {
  point.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    const infos = yellowLineData.filter(item => item.id === id);
    displayInfos(infos);
  });
});

// 顯示信息
function displayInfos(infos) {
  const infoBox = document.getElementById("infoBox");
  const infoContent = document.getElementById("infoContent");
  if (infos.length > 0) {
    // 清空之前的內容
    infoContent.innerHTML = "";
    // 判斷icon是否要出現
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
      // 顯示資料
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


    infoBox.style.display = "block";
  }
}

// 關閉信息框
document.getElementById("closeBtn").addEventListener("click", () => {
  const infoBox = document.getElementById("infoBox");
  infoBox.style.display = "none";
});