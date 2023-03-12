let width, height, hyp, deg;
function setup(){
	width = document.documentElement.scrollWidth;
	height = document.documentElement.scrollHeight;
	hyp = Math.sqrt((width**2)+(height**2));
	deg = 180 + Math.acos(width/hyp)*(180/Math.PI);
	
	document.documentElement.style.setProperty('--rotation', deg + "deg");
}
window.addEventListener("resize", setup);
window.addEventListener("load", setup);
setup();