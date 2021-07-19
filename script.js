
var timerEl = document.querySelector(".timer");

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Timer: " + secondsLeft; 

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        } 

    }, 600);
}


function sendMessage(){
    timerEl.textContent= "You lost";
}

setTime();

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
//console.log(choices)


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


//create an array of question objects
let questions = [
    {
        question: "What is 2+2?",
        choice1: "2",
        choice2: "4",
        choice3: "16",
        choice4: "33",
        answer: 2,
    },
    {
        question: "What is 1+1?",
        choice1: "2",
        choice2: "4",
        choice3: "16",
        choice4: "33",
        answer: 1,
    },
    {
        question: "What is 3+3?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "33",
        answer: 3,
    },
]

//constants
const WRONG_ANSWERS = 5;
const MAX_QUESTIONS = 3;


 function startGame () {
    questionCounter= 0;
    score = 0;
    availableQuestions= [...questions];
    //console.log(availableQuestions);
    getNewQuestion();
};

function getNewQuestion (){
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("finalscore.html");
    }
    questionCounter++;
    const questionsIndex =  Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionsIndex, 1);
    
    acceptingAnswers = true;
};

choices.forEach( choice => {
    choice.addEventListener("click", e =>{
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];


    const classToApply = 
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        //set timer to decrease by 5 or 10 when wrong answer is selected
        if (classToApply === "incorrect") {
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout (() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();  

        }, 1000);        
    });
});




startGame();


