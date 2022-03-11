const guessBtn = document.querySelector(".guess-btn");
const box = document.querySelectorAll(".box");
const guessInput = document.getElementById('guess-input');
const message = document.querySelector(".message");

let hiddenNumber, count = 1, gameOver = false;
let colors = ["#a31c1c", "#68a31c"];
box[0].innerHTML = "Game Over!!!";
box[1].innerHTML = "Try Again";

// box[1].onclick = () => {

// }

guessBtn.onclick = () => {
    console.log(box)
    hiddenNumber = randomGeneratedNumber();
    console.log(hiddenNumber);
    checkIfgameOver();
}

function checkIfgameOver() {
    let inputValue = guessInput.value;
    if (count === 5) {
        gameOver = true;
        if (gameOver === true && Number(inputValue) !== hiddenNumber) {
            box.forEach(box => {
                if (box.classList.contains("reset") || box.classList.contains("game-over")) {
                    box.style.display = "flex";
                } else {
                    box.style.display = "none";
                }
            })
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