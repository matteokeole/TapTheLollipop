const colors = [
	"f44336",
	"e91e63",
	"ec27b0",
	"673ab7",
	"3f51b5",
	"2196f3",
	"03a9f4",
	"00bcd4",
	"009688",
	"4caf50",
	"8bc34a",
	"cddc39",
	"ffeb3b",
	"ffc107",
	"ff9800",
	"ff5722",
	"795548",
	"9e9e9e",
	"607d8b"
],
color = function() {return `#${colors[Math.floor(colors.length * Math.random())]}`},
lollipop = document.querySelector(".lollipop"),
overlay = document.querySelector(".overlay");
let random = color();

// showing the stick & the lollipop
document.querySelector(".stick").style.bottom = 0;
lollipop.style.bottom = 0;
lollipop.style.backgroundColor = random;
overlay.style.backgroundColor = random;
lollipop.addEventListener("click", function() {
	random = color();
	this.style.backgroundColor = random;
	overlay.style.backgroundColor = random
})