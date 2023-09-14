const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const resetBtn = document.getElementById("reset");
const counterDisplay = document.getElementById("counterDisplay");

let counter = 0;

add.addEventListener("click", () => {
  counter++;
  counterDisplay.innerText = counter;
});

subtract.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    counterDisplay.innerText = counter;
  }
});

reset.addEventListener("click", () => {
  if (counter > 0) {
    counter = 0;
    counterDisplay.innerText = counter;
    alert("Counter reset.");
  }
});
