// const input = document.querySelector("input");
// const label = document.querySelector("label");
// const span = document.querySelector("span");
// const body = document.querySelector("body");
// const sun = document.querySelector(".fa-sun");
// const moon = document.querySelector(".fa-moon");
// const heading = document.querySelector("h1");
// const paragraph = document.querySelector("p");

// let darkMode = (x) => {
// 	span.style.transform = "translateX(41px)";
// 	body.style.backgroundColor = "#36264c";
// 	moon.classList.remove("icon-hidden");
// 	sun.classList.add("icon-hidden");
// 	heading.style.color = "#707875";
// 	paragraph.style.color = "#707875";
// 	label.style.borderColor = "#707875";
// 	span.style.borderColor = "#707875";
// };

// let lightMode = (x) => {
// 	span.style.transform = "translateX(0px)";
// 	body.style.backgroundColor = "#FFDF7E";
// 	sun.classList.remove("icon-hidden");
// 	moon.classList.add("icon-hidden");
// 	heading.style.color = "#000";
// 	paragraph.style.color = "#000";
// 	span.style.backgroundColor = "#FFF";
// };

// let isMoved = false;

// function toggleButton() {
// 	if (!isMoved) {
// 		darkMode();
// 	} else {
// 		lightMode();
// 	}
// 	isMoved = !isMoved;
// }

// input.addEventListener("click", toggleButton);


const h2 = document.querySelector(".test");
const classes = h2.classList;

h2.addEventListener('click', e => {
  const result = classes.toggle("New");
  h2.textContent = `${result ? "added" : ""}
  HUMUMUMUMU`;
})