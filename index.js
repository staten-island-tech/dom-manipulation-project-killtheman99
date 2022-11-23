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

DOMSelectors.input.addEventListener("submit", function(event){
  event.preventDefault();
  output();
});

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  let input2 = DOMSelectors.input2.value;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<p class="name">${input} ${input2}</p>
    <button class= "remove btn" id= "btn" >Remove name</button>`
  );
  DOMSelectors.input.value = "";
  DOMSelectors.input2.value = "";
});

function card(){
  let remove = document.querySelectorAll(".remove");
  remove.forEach((el) =>{
  el.addEventListener("click", function(el){
this.parentElement.remove();
  });
  });
}


DOMSelectors.button3.addEventListener("click", function () {
  let nametags = document.querySelectorAll(".name");
  nametags.forEach((name) => name.remove());
});


