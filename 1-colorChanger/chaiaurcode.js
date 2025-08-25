// Select the required elements
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const clickedColor = e.target.id;
    switch (clickedColor) {
      case "grey":
        body.style.backgroundColor = clickedColor;
        break;
      case "white":
        body.style.backgroundColor = clickedColor;
        break;
      case "blue":
        body.style.backgroundColor = clickedColor;
        break;
      case "yellow":
        body.style.backgroundColor = clickedColor;
        break;
    }
  });
});

const navBar = document.querySelector("nav");
const darkMode = document.createElement("button");
darkMode.innerText = "Dark Mode";
darkMode.style.padding = "10px";
navBar.appendChild(darkMode);

darkMode.addEventListener("click", (e) => {
  body.style.backgroundColor = "#1a1a1a";
  body.style.color = "#fff";
});
