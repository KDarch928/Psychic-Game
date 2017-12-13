//create var needed for the game

var win = 0;
var lose = 0;
var guessLeft = 9;
var guessSoFar = "";
var message = "";
var singleLetter = "";
var charSet;
var keyPress;
var ranLetter;
var charNum = 0;
var displayText = document.getElementById("lttr-tracker");
var winner = document.getElementById("wins");
var losses = document.getElementById("lose");
var guessTxt = document.getElementById("guess");

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
	singleLetter = "";
	charSet = "abcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 1; i++) {
		singleLetter += charSet.charAt(Math.floor(Math.random() * charSet.length));
	}

	return singleLetter;
}

//create a function for decressing guesses
function guessCounter(){
	return guessLeft-=1;
}


//reset the game
function reStartGame(){
	guessLeft = 9;
	counter = 0;
	guessSoFar = "";
	guessTxt.textContent = guessLeft;
	displayText.textContent = guessSoFar;
}


//create key event for the game
document.onkeyup = function(event) {
	//get the key on the keyboard the user entered
	keyPress = event.key;

	//generate a random letter
	ranLetter = stringGen();


	//checking to see if the string is empty
	if (guessSoFar === ""){
		guessSoFar = keyPress;
	} else { //if the string is not empty, then contactnate the string to the new pressed key
		//check to a letter already exist in the string
		if (guessSoFar.includes(keyPress) === false){
			guessSoFar = guessSoFar + ", " + keyPress;
		}
	}

	//update the html display for key's pressed so far
	displayText.textContent = guessSoFar;

	//decrease the guess left by 1
	guessLeft = guessCounter();
	
	//update the html display for guess left
	guessTxt.textContent = guessLeft;

	if (keyPress === ranLetter){
		//increase the win counter by 1
		win = winCounter();
		
		//update the html display counter for win
		winner.textContent = win;

		//Reset the counter and guess so far and guesss left to reset the game for another round
		reStartGame();
	}

	if (guessLeft === 0){
		//increase the lose counter by 1
		lose = loseCounter();
		
		//update the html display for guess left
		guessTxt.textContent = guessLeft;
		
		//udpate the html display counter for losses
		losses.textContent = lose;
		
		//Reset the counter and guess so far and guesss left to reset the game for another round
		reStartGame();
	}

}
