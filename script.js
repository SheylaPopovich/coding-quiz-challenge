




/*const questions = [
    {
        question: "What is 2+2?",
        choice1: "2",
        choice1: "4",
        choice1: "16",
        choice1: "33",
        answer: 2,
    },
]*/


//create addeventlistener for start game btn
/*let startBtn = document.getElementById("#startBtn");

startBtn.addEventListener("click", startGame)


function startGame() {
    console.log("lets do the dang thing!")
}*/

var timerEl = document.querySelector(".timer");

var secondsLeft = 80;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Timer: " + secondsLeft; 

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        } 

    }, 80);
}




function sendMessage(){
    timerEl.textContent= "You lost";

}

setTime();
