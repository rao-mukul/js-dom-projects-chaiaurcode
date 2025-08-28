const start = document.getElementById("start");
const stopBtn = document.querySelector("#stop");

let colorInterval;

start.addEventListener("click", function () {
  if (!colorInterval) {
    colorInterval = setInterval(function () {
      changeColor();
    }, 1000);
  }
});

stopBtn.addEventListener("click", function () {
  clearInterval(colorInterval);
  colorInterval = null;
});

function changeColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
}
