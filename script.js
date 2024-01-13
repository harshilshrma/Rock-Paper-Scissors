document.addEventListener("DOMContentLoaded", function () {
    var hoverSound = document.getElementById("hoverSound");

    var icons = document.querySelectorAll(".imgs");

    icons.forEach(function (icon) {
        icon.addEventListener("mouseover", function () {
            hoverSound.play();

        });
    });
});

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".imgs");

const generateCompChoice = () => {
    // One of rock, paper and scissors
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const drawGame = () => {
    console.log("DRAW");
}

const playGame = (userChoice) => {
    console.log("user choice is = ", userChoice);
    // To generate computer's choice
    const compChoice = generateCompChoice();
    console.log("comp choice is = ", compChoice);

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
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});