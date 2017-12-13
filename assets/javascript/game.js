//create var needed for the game

var win = 0;
var lose = 0;
var guessLeft = 9;
var counter = 0;
var guessSoFar = "";
var charNum = 0;

//create a counter function for win
function winCounter(){
	return win+=1;
}


//create a counter function for lose
function loseCounter(){
	return lose+=1;
}


//random string generator
function stringGen(){
	var letter = "";
	var charSet = "abcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 1; i++) {
		letter += charSet.charAt(Math.floor(Math.random() * charSet.length));
	}

	return letter;
}

//create a function for decressing guesses
function guessCounter(){
	guessLeft -= 1;
	var guessTxt = document.getElementById("guess");
	guessTxt.textContent = guessLeft;
}


//reset the game
function reStartGame(){
	var resetGuess = document.getElementById("lttr-tracker")
	var resetLeft = document.getElementById("guess");
	guessLeft = 9;
	counter = 0;
	guessSoFar = "";
	alert("Play Again!");
	resetLeft.textContent = guessLeft;
	resetGuess.textContent = guessSoFar;
}


//create key event for the game
document.onkeyup = function(event) {
	var keyPress = event.key;
	

	if (counter < 8){
		//generte a random letter
		var ranLetter = stringGen();
		var userText = document.getElementById("lttr-tracker");
		counter++;
		// console.log(guessLeft);
		// console.log(counter);
		
		//function to decrese the counter while the counter is les than guessLeft
		guessCounter();


		if (guessSoFar === ""){
			guessSoFar = keyPress;
		} else {
			if ( guessSoFar.includes(keyPress) === false){
				guessSoFar = guessSoFar + ", " + keyPress;
			}
			// guessSoFar = guessSoFar + ", " + keyPress;
		}

		userText.textContent = guessSoFar;

		//if the userguess is the same
		if (keyPress === ranLetter){
			var winner = document.getElementById("wins");
			//increase the win counter
			win = winCounter();
			//send an alert that the user won!
			alert("You Won!");
			//Reset the counter and guess so far and guesss left to reset the game for another round
			reStartGame();
			winner.textContent = win;
		}
	} else {
		guessCounter();
		var losses = document.getElementById("lose");
		lose = loseCounter();
		if (guessLeft === 0){
			alert("You Lose!");
			reStartGame();
			losses.textContent = lose;
		}
		// alert("You Lose!");
		// reStartGame();
		// losses.textContent = lose;
	}

}
