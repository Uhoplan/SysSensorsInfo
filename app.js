const si = require("systeminformation");
function checkSensors() {
  const coresResult = new Map();
  si.cpuTemperature()
    .then(function (data) {
      data.cores.forEach((item, index) => {
        coresResult.set(`core_${index}`, `${item} cels.`);
      });

      return console.log({
        temp: data.main,
        cores: Object.fromEntries(coresResult),
      });
    })
    .catch((error) => console.error(error));
}
setInterval(() => {
  checkSensors();
}, 1000);
