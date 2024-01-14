document.addEventListener("DOMContentLoaded", function () {
    var hoverSound = document.getElementById("hoverSound");

    var icons = document.querySelectorAll(".imgs");

    icons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            hoverSound.play();
        });
    });
});

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".imgs");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice = () => {
    // One of rock, paper and scissors
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const drawGame = () => {
    msg.innerText = "It's a Draw! Play again.";
    msg.style.backgroundColor = "#000000";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "#136F63";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#D00000";
    }
}

const playGame = (userChoice) => {
    // To generate computer's choice
    const compChoice = generateCompChoice();

    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // comp shd be scissor or paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // comp shd be scissor or rock
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // comp shd be rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});