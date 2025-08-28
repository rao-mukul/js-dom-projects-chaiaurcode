window.addEventListener("keydown", function (e) {
  key.innerText = e.code;
});
const key = this.document.createElement("span");
this.document.getElementById("insert").appendChild(key);
