const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("black-box"),
  points: document.querySelectorAll(".points"),
  input: document.querySelector("#input"),
  button2: document.getElementById("btn2"),
};

function backgroundandtext(background, text) {
  background.style.backgroundColor = "blue";
  text.textContent = "This is now a blue box";
  text.style.fontSize = "30px";
}

DOMSelectors.button2.addEventListener("click", function () {
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

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors(input, input2).value;
  console.log(input);
});
