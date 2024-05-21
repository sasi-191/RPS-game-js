let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#text");

const userScores = document.querySelector("#userscore");
const compScores = document.querySelector("#botscore");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

const drawGame = () => {
    msg.innerText = `It was a draw because I too chose ${compChoice}😅`;
    msg.style.backgroundColor = "#f78c19";
}

const playgame = (userChoice) => { 
    console.log("user choice", userChoice);
    compChoice = gencompChoice();
    console.log("comp schoice", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScores.innerText = userScore;
        msg.innerText = `Yay! you won, ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "Green";
        
        if(userScore == 5){
            msg.innerText= "That's great. You won the game. 🥳🥳";
            msg.style.backgroundColor = "#b21cfc";
            msg.style.border = "black solid 2px";
            compScores.innerText ="0";
        }
    }
    else {
        compScore++;
        compScores.innerText = compScore;
        msg.innerText = `oh oh! you lost, ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor = "red";
        
        if(compScore == 5){
            msg.innerText= "You lose the game. Try again 👎👎";
            msg.style.backgroundColor = "red";
            msg.style.border = "black solid 2px";
            userScores.innerText ="0";
        }
    }
   if(userScore === 5 || compScore === 5){
    userScore=0;
    compScore=0;
   }
}

const gencompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}
