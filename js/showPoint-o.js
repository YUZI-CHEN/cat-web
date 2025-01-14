const stationDataOrange = [
  { id: "Luzhou", name: "蘆洲", hasData: false },
  { id: "SSHS", name: "三民高中", hasData: false },
  { id: "IHS", name: "徐匯中學", hasData: false },
  { id: "SJHS", name: "三和國中", hasData: false },
  { id: "SES", name: "三重國小", hasData: false },
  { id: "Huilong", name: "迴龍", hasData: false },
  { id: "Danfeng", name: "丹鳳", hasData: false },
  { id: "FJU", name: "輔大", hasData: true },
  { id: "Xinzhuang", name: "新莊", hasData: false },
  { id: "Touqianzhuang", name: "頭前庄", hasData: false },
  { id: "Xianse-Temple", name: "先嗇宮", hasData: false },
  { id: "Sanchong", name: "三重", hasData: false },
  { id: "Cailiao", name: "菜寮", hasData: false },
  { id: "Taipei-Bridge", name: "台北橋", hasData: false },
  { id: "Daqiaotou", name: "大橋頭", hasData: true },
  { id: "Minquan", name: "民權西路", hasData: false },
  { id: "ZES", name: "中山國小", hasData: true },
  { id: "Xingtian-Temple", name: "行天宮", hasData: true },
  { id: "Songjiang-Nanjing", name: "松江南京", hasData: false },
  { id: "Zhongxiao-Xinsheng", name: "忠孝新生", hasData: true },
  { id: "Dongmen", name: "東門", hasData: true },
  { id: "Guting", name: "古亭", hasData: true },
  { id: "Dingxi", name: "頂溪", hasData: false },
  { id: "Yongan-Market", name: "永安市場", hasData: true },
  { id: "Jingan", name: "景安", hasData: false },
  { id: "Nanshijiao", name: "南勢角", hasData: true },

];
function renderStations(data) {
  const orangeLineGroup = document.getElementById("orange-line");


  // 清空現有內容
  orangeLineGroup.innerHTML = `
   <image href="./img/luzhou.svg" class="line" data-tag="中和新蘆線" />
  `;


  data.forEach((station) => {
    if (station.hasData) {
      const stationImage = `
        <image 
          class="${station.id} point orange-point" 
          data-name="${station.name}" 
          data-id="${station.id}" 
          href="./img/MAP-點.svg" />
      `;
      orangeLineGroup.innerHTML += stationImage;
    }
  });
}

// 呼叫函數渲染站點
renderStations(stationDataOrange);