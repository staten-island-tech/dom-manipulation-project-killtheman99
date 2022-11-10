const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("black-box"),
  points: document.querySelectorAll(".points"),
};

function backgroundandtext(background, text) {
  background.style.backgroundColor = "blue";
  text.textContent = "This is now a blue box";
  text.style.fontSize = "30px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundandtext(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  DOMSelectors.points.forEach((point) => {})
  point.addEventListener("click", function)
}
changeLi();
