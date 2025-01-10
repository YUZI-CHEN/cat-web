const stationDataRed = [
  { id: "Xinbeitou", name: "新北投", hasData: false },
  { id: "Danshui", name: "淡水", hasData: false },
  { id: "Hongshulin", name: "紅樹林", hasData: false },
  { id: "Zhuwei", name: "竹圍", hasData: false },
  { id: "Guandu", name: "關渡", hasData: true },
  { id: "Zhongyi", name: "忠義", hasData: false },
  { id: "Fuzinggang", name: "復興崗", hasData: false },
  { id: "Beitou", name: "北投", hasData: false },
  { id: "Qiyan", name: "奇岩", hasData: false },
  { id: "Qilian", name: "唭哩岸", hasData: false },
  { id: "Shipai", name: "石牌", hasData: false },
  { id: "Mingde", name: "明德", hasData: false },
  { id: "Zhishan", name: "芝山", hasData: true },
  { id: "Shilin", name: "士林", hasData: false },
  { id: "Jiantan", name: "劍潭", hasData: false },
  { id: "Yuanshan", name: "圓山", hasData:true },
  { id: "Minquan", name: "民權西路", hasData: false },
  { id: "Shuanglian", name: "雙連", hasData: true },
  { id: "Zhongshan", name: "中山", hasData: true},
  { id: "Taipei-Main", name: "台北車站", hasData: false },
  { id: "NTUH", name: "臺大醫院", hasData: false },
  { id: "Chian-Kai-Shek", name: "中正紀念堂", hasData: true },
  { id: "Dongmen", name: "東門", hasData: false },
  { id: "Daan-Park", name: "大安森林公園", hasData: false },
  { id: "Daan", name: "大安", hasData: false },
  { id: "Xinyi-Anhe", name: "信義安和", hasData: true },
  { id: "Taipei101", name: "台北101", hasData: true },
  { id: "Xiangshan", name: "象山", hasData: false },


];
function renderStations(data) {
  const redLineGroup = document.getElementById("red-line");

  // 清空現有內容
  redLineGroup.innerHTML = `
    <image href="./img/freshwater.svg" class="line" data-tag="淡水線" />
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
      redLineGroup.innerHTML += stationImage;
    }
  });
}

// 呼叫函數渲染站點
renderStations(stationDataRed);