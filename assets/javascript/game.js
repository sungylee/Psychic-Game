//Declear variable - Global Variables

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computeLetter = "";
var guessedLetters = ""; 
var guessesLeft = 9; 
var wins = 0; 
var losses = 0; 

//Initial function call to get random computer letter
randomLetter();

//function to pick random letter and return computeLetter
function randomLetter() {
  //Create a random letter between a and z
  computeLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
  //Display computer picked letter
  console.log(computeLetter);
  return computeLetter;
}
 
//function to check if guessed the letter correctly or incorrectly and if out of guesses
function evaulateGuess(letter) {

  // Check if the user has guessed the letter correctly
  if (letter === computeLetter) {
    //wins += 1;
    wins++;
    alert('Nice ! you are indeed a Psychic. You won!');
    resetGame();

    // Check if the user is out of guesses
  } else if (guessesLeft === 0) {
    losses++;
    alert('Try again ! You are not a Psychic. You Lost!');
    resetGame();
  }
}

//function to reset the game: reset only guessed letters and set gusses left to 9
function resetGame() {
  guessedLetters = "";
  guessesLeft = 9;
  randomLetter();
}

//function to update HTML page
function updateDOM() {
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("guessedLetters").innerHTML = guessedLetters.split("").join(", ");
}

//Response to user's action key press
//Start game when a key is pressed and capture the guessed letter
document.onkeypress = function(event) {

  guessedLetters += event.key;
  guessesLeft--;
  evaulateGuess(event.key);
  updateDOM();
}

