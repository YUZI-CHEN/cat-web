const stationDataYellow = [
  { id: "NTIP ", name: "新北產業園區", hasData: false },
  { id: "Xingfu", name: "幸福", hasData: false },
  { id: "Touqianzhuang", name: "頭前庄", hasData: false },
  { id: "Xinpu-Minsheng", name: "新埔民生", hasData: false },
  { id: "Banciao", name: "板橋", hasData: true },
  { id: "Banxin", name: "板新", hasData: false },
  { id: "Zhongyuan", name: "中原", hasData: true },
  { id: "Qiaohe", name: "橋和", hasData: false },
  { id: "Zhonghe", name: "中和", hasData: false },
  { id: "Jingan", name: "景安", hasData: false },
  { id: "Jingping ", name: "景平", hasData: false },
  { id: "Xiulang-Bridge", name: "秀朗橋", hasData: false },
  { id: "Shisizhang", name: "十四張", hasData: false },
  { id: "Dapinglin", name: "大坪林", hasData: false },
];
function renderStations(data) {
  const yellowLineGroup = document.getElementById("yellow-line");


  // 清空現有內容
  yellowLineGroup.innerHTML = `
   <image href="./img/newTaipei.svg" class="line" data-tag="環狀線" />
  `;


  data.forEach((station) => {
    if (station.hasData) {
      const stationImage = `
        <image 
          class="${station.id}  point yellow-point" 
          data-name="${station.name}" 
          data-id="${station.id}" 
          href="./img/MAP-點.svg" />
      `;
      yellowLineGroup.innerHTML += stationImage;
    }
  });
}

// 呼叫函數渲染站點
renderStations(stationDataYellow);