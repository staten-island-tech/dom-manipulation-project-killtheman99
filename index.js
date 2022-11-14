const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("black-box"),
  points: document.querySelectorAll(".points"),
  input: document.querySelector("#input"),
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
  let pointindex = 1;
  DOMSelectors.points.forEach((point) => {
    point.addEventListener("click", function () {
      point.textContent = `hello I am point ${pointindex}`;
      pointindex++;
    });
  });
}
changeLi();
