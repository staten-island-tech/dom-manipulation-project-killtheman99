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

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  let input2 = DOMSelectors.input2.value;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",

    `<div><p class="name">${input} ${input2}</p>
    <button class= "remove" id= "btn4" >Remove name</button>
    </div>`
  );
  DOMSelectors.input.value = "";
  DOMSelectors.input2.value = "";
  let remove = document.getElementById("btn4");
  console.log(remove);
  remove.addEventListener("click", function (remove) {
    remove.parentElement.remove();
  });
});

function card() {
  remove.forEach((remove) => {
    remove.addEventListener("click", function (obj) {
      obj.parentElement.remove();
    });
  });
}

DOMSelectors.button3.addEventListener("click", function () {
  let nametags = document.querySelectorAll(".name");
  nametags.forEach((name) => name.remove());
});
