//

//

// for (let i = 0; i < slika.length; i++) {
// 	slika[i].addEventListener("click", function () {
// 		this.classList.toggle("zoom");
// 	});
// }

// document.getElementById("paraHolder").addEventListener("click", function (e) {
// 	var target = e.target; // event target = element na koji se kliknulo
// 	target.style.color = "blue";
// 	console.log(target);
// });

document.getElementById("imageHolder").addEventListener("click", function (e) {
	e.target.classList.toggle("zoom");
	console.log(e.target);
});
