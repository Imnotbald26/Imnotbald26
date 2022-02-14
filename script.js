
let numberIn = Math.trunc(Math.random() * 20 ) + 1;
let scoreWrong = 20;
let scoreHigh = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = 
    message
}

document.querySelector(".check").addEventListener
("click", function(){
    const guess = Number(document.querySelector(".guess").value)

    if(!guess){
        displayMessage("👺 No number")
    //when player guess the number rightly 
    }else if(guess === numberIn){
        displayMessage("Correct number🎉")
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = numberIn;
        if(scoreWrong > scoreHigh){
            scoreHigh = scoreWrong
            document.querySelector(".highscore").textContent = scoreHigh
        }

    //number is to high
    }else if (guess !== numberIn){
        if(scoreWrong > 0){
            displayMessage(guess > numberIn ? "To high 😃" : "To low 😔")
            scoreWrong--;
            document.querySelector(".score").textContent = scoreWrong;
        }else{ 
            displayMessage("You lost the game 😭")
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener
("click", function(){
    scoreWrong = 20;
    numberIn = Math.trunc(Math.random() * 20) + 1

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = scoreWrong;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});










