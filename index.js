const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("black-box"),
};
function backgroundandtext(background, text) {
  background.style.backgroundColor = "blue";
  text.textcontent = "This is now a blue box";
  text.style.fontSize = "30px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundandtext(DOMSelectors.box, DOMSelectors.text);
});
