const brownLineData=[
  {
    "id":"Dazhi",
    "station":"大直站",
    "title":"杜鵑窩咖啡",
    "time":"週一 ~ 週五：14:00 ~ 00:30(有異動請注意粉絲團)、六日：13:30 ~ 00:30",
    "address":"台北市中山區北安路458巷41弄52號",
    "tel":"(02)2533-0531", 
    "fb":"https://www.facebook.com/CUCKOOSNESTCAFE/",
    "map":"https://maps.app.goo.gl/DXPn3Xen9Q32CKE5A",
    "other":"店貓",
    "tags":["店貓"]

    },
     {
    "id":"Dazhi",
    "station":"大直站",
    "title":"BreakFirst CAFE/Studio",
    "time":"週一 ~ 週五：13:00 ~ 18:00 (週一週四公休)六、日:11:00-18:00",
    "address":"台北市中山區北安路573巷15號1樓",
    "tel":"(02)2533-5648", 
    "fb":"https://www.facebook.com/breakfirst.place/",
    "map":"https://maps.app.goo.gl/9Jts7gsYC52VktcV7",
    "other":"很多貓",
    "tags":["很多貓"]

    },
      {
    "id":"Songshan-Airport",
    "station":"松山機場站",
    "title":"朵朵嚐嚐貓咪中途咖啡廳",
    "time":"週二 ~ 週六：12:00 ~ 21:00 (週一公休)、週日：12:00~18:00",
    "address":"台北市松山區敦化北路222巷17-2號",
    "tel":"09-89964092", 
    "instagram":"https://www.instagram.com/hiddenduoduo/#",
    "map":"https://maps.app.goo.gl/ijMe1JCTNg1ezvLG9",
    "other":"中途、禁12歲以下",
    "tags":["中途","禁年齡"]

    },
     {
    "id":"Daan",
    "station":"大安站",
    "title":"曬貓咖啡",
    "time":"週一 ~ 週日：8:00 ~ 16:00(休息日看粉專)",
    "address":"台北市大安區和平東路二段175巷20號1樓",
    "tel":"(02)2325-0566", 
    "map":"https://maps.app.goo.gl/CFvxQ68pFPheGJ827",
    "other":"很多貓",
    "tags":["很多貓"]

    },
    {
    "id":"Muzha",
    "station":"木柵站",
    "title":"小公寓Apt. Cafe",
    "time":"週一 ~ 週日：11:00 ~ 20:00",
    "address":"台北市文山區指南路二段56號2樓",
    "tel":"(02)2939-2790",
    "fb":"https://www.facebook.com/profile.php?id=100063801467514", 
    "map":"https://maps.app.goo.gl/LeioAoCx4WbHpuDT6",
    "other":"店貓",
    "tags":["店貓"]
    },
 
];
// 绑定事件
document.querySelectorAll(".point").forEach((point) => {
  point.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    const infos = brownLineData.filter(item => item.id === id);
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