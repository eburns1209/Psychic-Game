// var letters = ["a", "b", "c", "d", "e"];

// var winsCounter = 0;
// var lossesCounter = 0;
// var guessesLeft = 0;
// var guessesSoFar = 0;

var letters = ["a", "b", "c", "d", "e"];
var x = letters[Math.floor(Math.random() * letters.length)];
var turns = 5;
var hint = 'Guess my letter, a-e!';

var answerArray = [];
for (var i = 0; i < x.length; i++){
  answerArray[i] = "_";
}


// while (turns > 0) {
//   // alert(answerArray.join(""));
//   var guess = prompt(hint +
//       ' You have ' + turns + ' guesses left.');
//   if (!guess) break;
//   guess = Number(guess);
//   if (guess === x) {
//     document.write('<p>YOU WIN!</p>');
//     turns = 0;
//   } else {
//     hint = 'Nope.';
//     if (guess != x);
//     if (guess != x);
//     turns = turns - 1;
//   }
// }
// alert('The secret letter was'); 
// var letter = letters[Math.floor(Math.random() * letters.length)];

// var answerArray = [];
// for(var i = 0; i < letter.length; i++){
// 	answerArray[i] = "_";
// }

// var remainingLetters = letter.length;

// while(remainingLetters > 0){
// 	alert(answerArray.join(""));
// 	var guess = prompt("Guess a letter or click cancel to stop playing.");

// 	if (guess === null){
// 		break;
// 	}
// 	else if(guess.length !== 1){
// 		alert("Please enter a single letter.");
// 	}
// 	else{
// 		for (var j=0; j<letter.length; j++){
// 			answerArray[j] = guess;
// 			remainingLetters--;
// 		}
// 	}


// alert(answerArray.join(""));
// alert("good job the " + letter);

}

	if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c"))
		((userGuess === "d") || (userGuess === "e") || (userGuess === "f"))
		((userGuess === "g") || (userGuess === "h") || (userGuess === "i"))
		((userGuess === "j") || (userGuess === "k") || (userGuess === "l"))
		((userGuess === "m") || (userGuess === "n") || (userGuess === "o"))
		((userGuess === "p") || (userGuess === "q") || (userGuess === "r"))
		((userGuess === "s") || (userGuess === "t") || (userGuess === "u"))
		((userGuess === "v") || (userGuess === "w") || (userGuess === "x"))
		((userGuess === "y") || (userGuess === "z")) {

			if ((userGuess === "a") && (computerGuess === "a")) {
            winsCounter++;
          }
          else if ((userGuess === "r") && (computerGuess === "p")) {
            lossesCounter++;
          }
          else if ((userGuess === "s") && (computerGuess === "r")) {
            lossesCounter++;
          }
          else if ((userGuess === "s") && (computerGuess === "s")) {
            winsCounter++;
          }
          else if ((userGuess === "p") && (computerGuess === "p")) {
            winsCounter++;
          }
          else if ((userGuess === "p") && (computerGuess === "s")) {
            lossesCounter++;
          }
          
	if ((userGuess === "a") && (computerGuess ==="c")){
		alert("You guessed wrong, try again");
		document.getElementById("left").innerHTMl = "guessesLeft " - 1;
		}
	
