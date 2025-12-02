//computer stores number//

let randomNum = Math.floor(Math.random() * 100) +1;
//get reference elements//
//variables to target html element//
let guessInput = document.getElementById('guessInput');
let checkButton = document.getElementById('checkButton');
let result = document.getElementById('result');
let restartButton = document.getElementById('restartButton');

checkButton.onclick = ()=>{
    let guess = Number(guessInput.value);
    if(guess < 1 || guess > 100 ){
        result.textContent = "Enter a number between 1 to 100.";
        result.style.color = "red";
    }
    else if(guess === randomNum){
        result.innerHTML = "<b>🎉Congragulations! You Won ❤️</b>";
        result.style.color ="green";
        checkButton.disabled =true;
        restartButton.style.display = "block";
    }
    else{
        result.textContent = guess < randomNum ? 'Too Low! Try Again 😔' : 'Too High! Try Again 😔';
        result.style.color ="orange";
    }
    guessInput.value = '';
    guessInput.focus();
}
restartButton.onclick = ()=>{
    randomNum = Math.floor(Math.random() * 100) +1;
    result.textContent = '';
    checkButton.disabled = false;
    restartButton.style.display = "none";
    guessInput.focus();
}
