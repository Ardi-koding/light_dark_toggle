/*
    GOAL
    1. Membuat Button Toggle yang akan mengganti tema dari 
	Light ke Dark dan Sebaliknya [Done]
	2. Animasi mulus saat perubahan tema [Not Yet]

	Minimum Viable Product
	1. Button dengan style yang lumayan bagus dan mampu
		merubah tema [Done]

	Langkah-Langkah
	1. Dua Elemen icon yaitu "sun" and "moon"; [Done]
	2. default adalah light mode yaitu "sun" [Done]
	3. icon yang tidak sesuai tema, kita taruh class "icon-hidden"; [Done]
	4. Kita pakai eventlistener untuk mendengar "click" event saat button diklik. [Done]
	5. Kita gunakan classList dan method "toggle" untuk merubah apakah sun dan moon memiliki "icon-hidden". [Done]
	6. Sun dan Moon harus berkebalikan. [Done]
	7. Kita deklarasikan variable yang memiliki pernyataan boolean terkait apakah sun dan moon memiliki "icon-hidden". [Done]
	8. Berdasarkan kedua variable kita aplikasikan style yang sesuai dengan tema. [Done]
	9. Kita harus memerhatikan event propagation. [Done]
	10. Aplikasi Transisi yg mulus terhadap toggle button [Not Yet]
*/

const body = document.querySelector("body");
const label = document.querySelector("label");
const span = document.querySelector(".slider-round");

const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");

const themeChange = (e) => {
	sun.classList.toggle("icon-hidden");
	moon.classList.toggle("icon-hidden");

	const isSunHidden = sun.classList.contains("icon-hidden");
	const isMoonHidden = moon.classList.contains("icon-hidden");

	if (isSunHidden && !isMoonHidden) {
		body.style.backgroundColor = "#36264c";
		body.style.color = "#f6f1d5";
		label.style.backgroundColor = "#bcd";
		label.style.justifyContent = "flex-end";
		span.style.backgroundColor = "#000";
		body.style.transition = "all 1s ease 0s";
	} else if (!isSunHidden && isMoonHidden) {
		body.style.backgroundColor = "#bcd";
		body.style.color = "#000";
		label.style.backgroundColor = "#f6f1d5";
		label.style.justifyContent = "flex-start";
		span.style.backgroundColor = "#fff";
		body.style.transition = "all 1s ease 0s";
		label.style.transition = "all 0.5s";
	}
};

label.addEventListener("click", (e) => {
	themeChange();
});

const input = document.querySelector("input");
input.addEventListener("click", (e) => {
	e.stopImmediatePropagation();
});
