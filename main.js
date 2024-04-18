const input = document.querySelector("input");
const label = document.querySelector("label");
const span = document.querySelector("span");

let isMoved = false;

function toggleButton() {
  if (!isMoved) {
    span.style.transform = "translateX(41px)";
  } else {
    span.style.transform = "translateX(0px)";
  }
  isMoved = !isMoved;
}

input.addEventListener("click", toggleButton);
