//Generate a random  between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

//Function to check the user guess
function checkGuess(){
    //Get user guess form the input field
    const userGuess = parseInt(document.getElementById('userGuess').value);

    //Get message element
    const message = document.getElementById('message');

    //check if user guess is correct, correct, too high or too low
    if (userGuess == randomNumber){
        message.style.color = 'green';
        message.textContent = 'Omeedetoo!!! You guessed the correct number!';
    }
    else if (userGuess < randomNumber){
        message.style.color = 'red';
        message.textContent = 'Nice Try';
    }
    else{
        message.style.color ='red';
        message.textContent = 'Nice Try';
    }
}