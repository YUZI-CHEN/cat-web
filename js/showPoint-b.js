const stationDataBlue = [
  { id: "Nangang-Exhibition", name: "南港展覽館", hasData: true },
  { id: "Nangang", name: "南港", hasData: false },
  { id: "Kunyang", name: "昆陽", hasData: false },
  { id: "Houshanpi", name: "後山埤", hasData: false },
  { id: "Yongchun", name: "永春", hasData: true },
  { id: "TCH", name: "市政府", hasData: true },
  { id: "Memorial-Hall", name: "國父紀念館", hasData: true },
  { id: "Zhongxiao-Dunhua", name: "忠孝敦化", hasData: false },
  { id: "Zhongxiao-Fuxing ", name: "忠孝復興", hasData: false },
  { id: "Zhongxiao-Xinsheng", name: "忠孝新生", hasData: true },
  { id: "Shandao-Temple", name: "善導寺", hasData: true },
  { id: "Taipei-Main", name: "台北車站", hasData: false },
  { id: "Ximen", name: "西門", hasData: true },
  { id: "Longshan-Temple", name: "龍山寺", hasData: false },
  { id: "Jiangzicui", name: "江子翠", hasData:true },
  { id: "Xinpu", name: "新補", hasData: true },
  { id: "Banciao", name: "板橋", hasData: true },
  { id: "Fuzhong", name: "府中", hasData: false },
  { id: "FEH", name: "亞東醫院", hasData: false },
  { id: "Haishan", name: "海山", hasData: false },
  { id: "Tucheng", name: "土城", hasData: false },
  { id: "Yongning", name: "永寧", hasData: false },
  { id: "Dingpu ", name: "頂埔", hasData: false },



];
function renderStations(data) {
  const blueLineGroup = document.getElementById("blue-line");


  // 清空現有內容
  blueLineGroup.innerHTML = `
    <image href="./img/bannan.svg" class="line" data-tag="板南線" />
  `;


  data.forEach((station) => {
    if (station.hasData) {
      const stationImage = `
        <image 
          class="${station.id}  point blueLine" 
          data-name="${station.name}" 
          data-id="${station.id}" 
          href="./img/MAP-點.svg" />
      `;
      blueLineGroup.innerHTML += stationImage;
    }
  });
}

// 呼叫函數渲染站點
renderStations(stationDataBlue);