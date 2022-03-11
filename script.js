const guessBtn = document.querySelector(".guess-btn");
const guessInput = document.getElementById('guess-input');
const message = document.querySelector(".message");
let hiddenNumber;
let count = 1;
let gameOver = false;

let colors = [
    "#a31c1c",
    "#68a31c"
]

guessBtn.onclick = () => {
    hiddenNumber = randomGeneratedNumber();
    console.log(hiddenNumber);
    checkIfgameOver();
}

function checkIfgameOver() {
    let inputValue = guessInput.value;
    if (count === 5) {
        gameOver = true;
        if (gameOver === true && Number(inputValue) !== hiddenNumber) {
            document.querySelector("body").innerHTML = "Game Over!!!";
        }
    } else {
        if (inputValue === "" || !Number(inputValue)) {
            message.textContent = "Unknown Input, please enter a valid number";
            message.style.color = colors[0];
        } else if (Number(inputValue) === hiddenNumber) {
            message.textContent = `${inputValue} is correct! You Win`;
            message.style.color = colors[1];
        } else {
            message.textContent = `${inputValue} is wrong! Please try again`;
            message.style.color = colors[0];
        }
        guessInput.value = "";
    }
    count++;
}

let randomGeneratedNumber = () => {
    return Math.floor(Math.random() * 11);
}

/*
Customer was visited 23/09/2021 2649622

reference initial comment by NMD. Let customer complain for new SR. 
It is unprofessional to reopen SR that has been worked on and 
esolved as this will only count against the Unit. Customers are trying 
to bypass or game the system because 
they don't want to visist the customer care due to queue 
customer has been advised to complain apropraitely 
*/