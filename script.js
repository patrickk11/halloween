let randomNumber = Math.floor(Math.random() * 50) + 1;
 let attempts = 5; 
 function checkGuess() { 
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
 }
if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) { message.innerText = "Please enter a valid number between 1 and 50."; 
    return; 

if (userGuess === randomNumber) { 
    message.innerText = "🎉 Correct! You found the candy count! 🎉";
    message.style.color = "#00FF00"; 
    } else { 
        attempts--; 
        if (attempts > 0) {
             message.innerText = userGuess > randomNumber ? 
                 `Too high! You have ${attempts} attempts left.`;
                 `Too low! You have ${attempts} attempts left.`; 
            message.style.color = "#FFA500"; 
        } else { 
            message.innerText = `👻 Game Over! The correct number was ${randomNumber}. 👻`; 
            message.style.color = "#FF0000"; 
        } 
    } 
} 
function resetGame() { 
        randomNumber = Math.floor(Math.random() * 50) + 1;
         attempts = 5;
          document.getElementById('guessInput').value = '';
           document.getElementById('message').innerText = '';
            document.getElementById('message').style.color = "#ff7518";
}