const greenLineData = [
  {
    "id": "Songshan",
    "station": "松山站",
    "title": "Mahome畫畫咖啡廳",
    "time": "週一 ~ 週日：10:30 ~ 21:00、週五：9:00 ~ 21:00",
    "address": "台北市信義區松信路64號一樓",
    "tel": "09-83516868",
    "fb": "https://www.facebook.com/mahome.food/",
    "map": "https://maps.app.goo.gl/sVGFPkWhawNAkf9D9",
    "other": "店貓、狗、狐蒙",
    "tags": ["店貓"]
  },
  {
    "id": "Nanjing-Sanmin",
    "station": "南京三民站",
    "title": "小春日和動物雜貨·咖啡",
    "time": "週一 ~ 週日：11:00 ~ 21:00",
    "address": "台北市延壽街361號1樓 (民生社區)",
    "tel": "(02)8787-6920",
    "web": "https://www.springday.tw/?fbclid=Iw",
    "fb": "https://www.facebook.com/SpringDayPetShopCafe/",
    "map": "https://maps.app.goo.gl/ngbBZWmZYCde34bY7",
    "other": "寵物美容'、寵物友善、挪威、英短、品種貓",
    "tags": ["寵物友善餐廳", "品種貓"]
  },
  {
    "id": "Nanjing-Sanmin",
    "station": "南京三民站",
    "title": "和貓咪有約",
    "time": "週六:09:00~22:00、週日~周一:09:00~20:00、週二 ~ 週四：11:30 ~ 20:00、週五:11:30~22:00",
    "address": "台北市松山區三民路3巷21號",
    "tel": "(02)2528-1808",

    "fb": "https://www.facebook.com/profile.php?id=100063914262351",
    "map": "https://maps.app.goo.gl/UedyRKJsPQYnuknc9",
    "other": "入店需10歲",
    "tags": ["禁年齡"]
  },
  {
    "id": "Guting",
    "station": "古亭站",
    "title": "貓圖咖啡",
    "time": "週一 ~ 週五：8:30 ~ 17:00、週六日：8:00 ~ 17:00",
    "address": "台北市大安區潮州街154號",
    "tel": "(02)3365-2865",
    "fb": "https://www.facebook.com/cat.jpg.cafe",
    "map": "https://maps.app.goo.gl/WspBw213uz5b2cbQ6",
    "other": "店貓",
    "tags": ["店貓"]
  },
  {
    "id": "Guting",
    "station": "古亭站",
    "title": "UNI CAFE",
    "time": "週一 ~ 週日：12:00 ~ 21:00",
    "address": "台北市中正區金門街15號",
    "tel": "(02)2364-0577",
    "web": "http://www.unicafestudio.com/",
    "map": "https://maps.app.goo.gl/qnSmMzYqRqqXFvHs5",
    "other": "店貓",
    "tags": ["店貓"]
  },
  {
    "id": "Taipower-Building",
    "station": "台電大樓站",
    "title": "UNI CAFE",
    "time": "週一 ~ 週日：12:00 ~ 21:00",
    "address": "台北市中正區金門街15號",
    "tel": "(02)2364-0577",
    "web": "http://www.unicafestudio.com/",
    "map": "https://maps.app.goo.gl/qnSmMzYqRqqXFvHs5",
    "other": "店貓",
    "tags": ["店貓"]
  },
  {

    "id": "Taipower-Building",
    "station": "台電大樓站",
    "title": "Bistro O避世所",
    "time": "週二:17:00~01:00(周一公休)、週三~週五：17:00 ~ 00:00、週日、週六：15:00 ~ 00:00",
    "address": "台北市大安區師大路49巷3號2樓",
    "tel": "(02) 2363-7170",
    "fb": "https://www.facebook.com/bistroO",
    "map": "https://maps.app.goo.gl/qEamsHdQv1qHRvS78",
    "other": "店貓",
    "tags": ["店貓"]
  },
  {

    "id": "Taipower-Building",
    "station": "台電大樓站",
    "title": "貓孩在極簡(極簡咖啡館)",
    "time": "週二 ~ 週日：12:00 ~ 21:00 (週一公休)",
    "address": "台北市大安區泰順街2巷42號",
    "tel": "(02)2362-9734",
    "fb": "https://www.facebook.com/profile.php?id=100061089434772",
    "map": "https://maps.app.goo.gl/nd6mVcXyaAdBXRAb8",
    "other": "很多貓",
    "tags": ["很多貓"]
  },
  {

    "id": "Gongguan",
    "station": "公館站",
    "title": "貓食光",
    "time": "週三 ~ 週日：12:00 ~ 20:00 (週一周二公休)週日:12:00~19:30",
    "address": "台北市大安區羅斯福路三段297-1號1樓",
    "tel": "(02)2366-0234",
    "fb": "https://www.facebook.com/profile.php?id=100063830744637",
    "map": "https://maps.app.goo.gl/1RpNYyc5doPD9tcx8",
    "other": "中途、禁12歲以下",
    "tags": ["中途", "禁年齡"]
  },

];
// 绑定事件
document.querySelectorAll(".point").forEach((point) => {
  point.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    const infos = greenLineData.filter(item => item.id === id);
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