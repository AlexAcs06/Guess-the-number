/*
   Guess the number: steps
   1.-Generate a random number between 1-100
   2.-Save the number of the try in which the player is at.
   3.-Give the player a way of guessing which is the number.
   4.- Once the number has been written save it so that the player can see the previous try.
   5.-Check if the number is correct.
   6.-If it is correct:
        i. Show a message of congratulations
        ii. Not allow the player to introduce numbers anymore
        iii. Show a restart button
   
   7.If it ks incorrect and the player still has tries:
        i. Tell the player he has failed
        ii. Let him retry
        iii. When he fails increase the number of tries by one
   8.If the player fails and doesn't hav more tries:
        i. tell the player that he has finished
        ii.Don't let the player introduce more numbers
        iii.Show a restart button.
   9. When the game restarts make sure that the logic and the ui reset completely, then u go back to 1.

*/

let randomNumber = Math.floor(Math.random()*100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = "Previous attempts";
    }
    guesses.textContent += userGuess + " ";
    
    if (userGuess === randomNumber) {
        lastResult.textContent = "Bravo Bo$$";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();

    }else if (guessCount === 10) {
        lastResult.textContent = "Nasol Moment"
        setGameOver();

    }else{
        lastResult.textContent = "Nu-i bun";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Mai pluseaza fratele meu";

        }else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Mai taie din ele";
            
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Hai bre";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParas= document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas){
        resetPara.textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber= Math.floor(Math.random() * 100) + 1;
        
    
}