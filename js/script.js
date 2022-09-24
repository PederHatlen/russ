let hexClockEl = document.getElementById("HexClock");
let hexTimer;

let width;
let height;

function setup(){
	width = document.body.offsetWidth;
	height = document.body.offsetHeight;

	let hyp = Math.sqrt((width**2)+(height**2));
	let deg = 180 + Math.acos(width/hyp)*(180/Math.PI);
	// console.log(width, height, hyp, deg);

	document.documentElement.style.setProperty('--rotation', deg + "deg");
}
function hexClock(){
	const date = new Date();
	let time = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
	let hex = "#"+('000000' + Math.round((16777216/86400000)*(time[0]*3600000 + time[1]*60000 + time[2]*1000 + time[3])).toString(16).toUpperCase()).slice(-6);
	hexClockEl.style.color = hex;
}

hexClockEl.addEventListener("mouseover", (e)=>{
	hexClock();
	hexTimer = setInterval(hexClock, 250);
});
hexClockEl.addEventListener("mouseout", (e)=>{
	clearInterval(hexTimer);
	hexClockEl.style.color = "";
});
window.addEventListener("resize", setup);
window.addEventListener("load", setup);