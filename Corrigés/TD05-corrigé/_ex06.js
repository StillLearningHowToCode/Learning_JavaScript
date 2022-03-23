const dataset = [
  { consoleName: "PlayStation 2", salesVolume: 155, color: "#9E6125" },
  { consoleName: "Nintendo DS", salesVolume: 154.02, color: "#1343ED" },
  { consoleName: "GameBoy", salesVolume: 118.69, color: "#355456" },
  { consoleName: "PlayStation 4", salesVolume: 116.9, color: "#3D3336" },
  { consoleName: "Nintendo Switch", salesVolume: 103.54, color: "#264364" },
  { consoleName: "PlayStation", salesVolume: 102.49, color: "#13E565" },
  { consoleName: "Nintendo Wii", salesVolume: 101.63, color: "#362615" },
  { consoleName: "PlayStation 3", salesVolume: 87.4, color: "#37D624" },
  { consoleName: "Xbox 360", salesVolume: 84, color: "#9A1143" },
  { consoleName: "Gameboy Advance", salesVolume: 81.51, color: "#3E65A3" },
  { consoleName: "PlayStation Portable", salesVolume: 81, color: "#434C52" },
  { consoleName: "Nintendo 3DS", salesVolume: 75.94, color: "#555224" },
  { consoleName: "NES/Famicom", salesVolume: 61.69, color: "#667554" },
  { consoleName: "Xbox One", salesVolume: 51, color: "#624D2A" },
  { consoleName: "SNES/Super Famicom", salesVolume: 49.1, color: "#3243A2" },
  { consoleName: "Game & Watch", salesVolume: 43.4, color: "#1435B3" },
  { consoleName: "Nintendo 64", salesVolume: 32.93, color: "#653341" },
  {
    consoleName: "Sega Genesis/Mega Drive",
    salesVolume: 30.75,
    color: "#644846",
  },
  { consoleName: "Atari 2600", salesVolume: 30, color: "#361365" },
  { consoleName: "Xbox", salesVolume: 24, color: "#459552" },
  { consoleName: "Nintendo GameCube", salesVolume: 21.74, color: "#256824" },
  { consoleName: "PlayStation 5", salesVolume: 17.3, color: "#352455" },
  { consoleName: "Nintendo Wii U", salesVolume: 13.56, color: "#6A3635" },
  { consoleName: "PlayStation Vita", salesVolume: 12.5, color: "#B36361" },
  { consoleName: "Xbox Series X/S", salesVolume: 12, color: "#418E69" },
];
// Source Wikipedia (15/02/2022). Sales volume in millions of units sold

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: dataset.map((item) => item.consoleName),
    datasets: [
      {
        label: "# of sales in millions of units",
        data: dataset.map((item) => item.salesVolume),
        backgroundColor: dataset.map((item) => item.color),
      },
    ],
  },
  options: {},
});
