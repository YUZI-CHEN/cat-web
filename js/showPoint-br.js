const stationDataBrown=[
  { id: "Nangang-Exhibition", name: "南港展覽館", hasData: true },
  { id: "Nangang-Software-park", name: "南港軟體園區", hasData: false },
  { id: "Donghu", name: "東湖", hasData: false },
  { id: "Huzhou", name: "葫州", hasData: false },
  { id: "Dahu-Park ", name: "大湖公園", hasData: false },
  { id: "Neihu", name: "內湖", hasData: false },
  { id: "Wende", name: "文德", hasData: false },
  { id: "Gangqian", name: "港墘", hasData: false },
  { id: "Xihu", name: "西湖", hasData: false },
  { id: "Jiannang-Rd", name: "劍南路", hasData: false },
  { id: "Dazhi", name: "大直", hasData: true },
  { id: "Songshan-Airport", name: "松山機場", hasData: true },
  { id: "ZJHS", name: "中山國中", hasData: false },
  { id: "Nanjing-Fuxing", name: "南京復興", hasData: false },
  { id: "Zhongxiao-Fuxing", name: "忠孝復興", hasData: false },
  { id: "Daan", name: "大安", hasData: true },
  { id: "Technology-Building", name: "科技大樓", hasData: false },
  { id: "Liuzhanli", name: "六張犁", hasData: false },
  { id: "Linguang", name: "麟光", hasData: false },
  { id: "Xinhai", name: "辛亥", hasData: false },
  { id: "WH", name: "萬芳醫院", hasData: false },
  { id: "WC", name: "萬芳社區", hasData: false },
  { id: "Muzha", name: "木柵", hasData: true },
  { id: "Zoo ", name: "動物園", hasData: false },
];
function renderStations(data) {
  const brownLineGroup = document.getElementById("brown-line");


  // 清空現有內容
  brownLineGroup.innerHTML = `
   <image href="./img/nucha.svg" class="line" data-tag="文湖線" />
  `;


  data.forEach((station) => {
    if (station.hasData) {
      const stationImage = `
        <image 
          class="${station.id} point brown-point" 
          data-name="${station.name}" 
          data-id="${station.id}" 
          href="./img/MAP-點.svg" />
      `;
     brownLineGroup.innerHTML += stationImage;
    }
  });
}

// 呼叫函數渲染站點
renderStations(stationDataBrown);