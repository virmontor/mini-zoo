


var photos = document.getElementsByClassName("animal");
var select = document.getElementById("select");

select.onchange = function (){
	if (select.value == "original") {
		removeClass();
	}
	if (select.value == "blanco-negro") {
		removeClass();
		for (var i = 0; i < photos.length; i++) {
			photos[i].classList.add("blanco-negro");
		}
	}
	if (select.value == "invertir-colores") {
		removeClass();
		for (var i = 0; i < photos.length; i++) {
			photos[i].classList.add("invertir-colores");
		}
	}
	else if (select.value == "sepia"){
		removeClass();
		for (var i = 0; i < photos.length; i++) {
			photos[i].classList.add("sepia");
		}
	}
}
function removeClass(){
	for (var i = 0; i < photos.length; i++) {
			photos[i].classList.remove("blanco-negro");
			photos[i].classList.remove("invertir-colores");
			photos[i].classList.remove("sepia");
		}
}
