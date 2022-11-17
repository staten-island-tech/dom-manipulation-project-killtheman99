const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("black-box"),
  points: document.querySelectorAll(".points"),
  input: document.querySelector(`#input`),
  button2: document.getElementById("btn2"),
  input2: document.querySelector(`#input2`),
  button3: document.getElementById("btn3"),
};

function backgroundandtext(background, text) {
  background.style.backgroundColor = "blue";
  text.textContent = "This is now a blue box";
  text.style.fontSize = "30px";
}

DOMSelectors.button2.addEventListener("click", function () {
  backgroundandtext(DOMSelectors.box, DOMSelectors.text);
});

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  let input2 = DOMSelectors.input2.value;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<p class="name">${input} ${input2}</p>`
  );
  DOMSelectors.input.value = "";
  DOMSelectors.input2.value = "";
});

DOMSelectors.button3.addEventListener("click", function () {
  let nametags = document.querySelectorAll(".name");
  nametags.forEach((name) => name.remove());
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
