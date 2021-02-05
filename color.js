var colors = genrateRandomColors(6);
var choose = chooseRandom(6);
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var head = document.querySelector("#display");
head.textContent = choose;
var again = document.querySelector("#try");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var track = 0;

easy.addEventListener("click", function() {
	easy.classList.add("bg");
	hard.classList.remove("bg");
	track = 1;

	colors = genrateRandomColors(3);

	choose = chooseRandom(3);
	head.textContent = choose;


	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}

		else {
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click", function() {
	easy.classList.remove("bg");
	hard.classList.add("bg");
	track = 0;

	colors = genrateRandomColors(6);

	choose = chooseRandom(6);
	head.textContent = choose;


	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

again.addEventListener("click", function(){
	again.textContent = "New Colors"
	if(track === 0) {
		colors = genrateRandomColors(6);
		message.textContent = "";
		choose = chooseRandom(6);
		h1.style.backgroundColor = "steelblue";

		for(var i=0; i<squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
		}

		head.textContent = choose;	
	}

	else {
		colors = genrateRandomColors(3);
		message.textContent = "";
		choose = chooseRandom(3);
		h1.style.backgroundColor = "steelblue";

		for(var i=0; i<squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
		}

		head.textContent = choose;
	}
	
});

for(var i=0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === choose)
		{
			changeColor();
			message.textContent = "Congrates!!";
			h1.style.backgroundColor = choose;
			again.textContent = "New Game?";
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!!";
		}
	});
}


function chooseRandom(num) {
	return colors[Math.floor(Math.random() * num)];
} 

function genrateRandomColors(num) {
	var arr = [];
	while(num--)
		arr.push(randomColor());
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor() {
	for(var i=0; i< squares.length; i++) {
		squares[i].style.backgroundColor = choose;
	}
}