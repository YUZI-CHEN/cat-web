const stationDataGreen = [
  { id: "Songshan", name: "松山", hasData: true },
  { id: "Nanjing-Sanmin", name: "南京三民", hasData: true },
  { id: "Taipei-Arena", name: "台北小巨蛋", hasData: false },
  { id: "Nanjing-Fuxing ", name: "南京復興", hasData: false },
  { id: "Songjiang-Nanjing", name: "松江南京", hasData: false },
  { id: "Zhongshan", name: "中山", hasData:  true },
  { id: "Beimen", name: "北門", hasData: false },
  { id: "Ximen", name: "西門", hasData:  true },
  { id: "Xiaonanmen", name: "小南門", hasData: false },
  { id: "Chian-Kai-Shek", name: "中正紀念堂", hasData:  true },
  { id: "Guting", name: "古亭", hasData: true },
  { id: "Taipower-Building", name: "台電大樓", hasData: true },
  { id: "Gongguan", name: "公館", hasData: true },
  { id: "Wanlong", name: "萬隆", hasData: false },
  { id: "Jingmei", name: "景美", hasData: false },
  { id: "Dapinglin ", name: "大坪林", hasData: false },
  { id: "Qizhang", name: "七張", hasData: false },
  { id: "Xindian-District-Office ", name: "新店區公所", hasData: false },
  { id: "Xindian", name: "新店", hasData: false },
];

function renderStations(data) {
  const greenLineGroup = document.getElementById("green-line");


  // 清空現有內容
  greenLineGroup.innerHTML = `
   <image href="./img/xindian.svg" class="line" data-tag="新店線" />
  `;


  data.forEach((station) => {
    if (station.hasData) {
      const stationImage = `
        <image 
          class="${station.id}  point" 
          data-name="${station.name}" 
          data-id="${station.id}" 
          href="./img/MAP-點.svg" />
      `;
      greenLineGroup.innerHTML += stationImage;
    }
  });
}

// 呼叫函數渲染站點
renderStations(stationDataGreen);