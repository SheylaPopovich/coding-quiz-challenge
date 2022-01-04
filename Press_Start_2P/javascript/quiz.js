var timerEl = document.querySelector(".timer");

var secondsLeft = 80;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
      localStorage.setItem("endGameScore", secondsLeft);
      location.href = "finalscore.html";
    }
  }, 800);
}

function sendMessage() {
  timerEl.textContent = "You lost";
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
    question: "What is an HTML element?",
    choice1: "< +the element name+>",
    choice2: "A piece of content in an HTML webpage",
    choice3: "a class found in CSS",
    choice4: "an image in HTML",
    answer: 2,
  },
  {
    question: "What does HTML stand for?",
    choice1: "Hyper Text Markup Language",
    choice2: "Hyperlinks and Text Markup Language",
    choice3: "Home Tool Markup Language",
    choice4: "HyperWeb Text Markup Language",
    answer: 1,
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    choice1: "<h6>",
    choice2: "<heading>",
    choice3: "<h1>",
    choice4: "<head>",
    answer: 3,
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    choice1: "<script>",
    choice2: "<css>",
    choice3: "<style>",
    choice4: "style",
    answer: 3,
  },
  {
    question: "Which property is used to change the background color?",
    choice1: "color",
    choice2: "background-color",
    choice3: "bgcolor",
    choice4: "rgbcolor",
    answer: 2,
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    choice1: "Math.round(7.25)",
    choice2: "Math.rnd(7.25)",
    choice3: "rnd(7.25)",
    choice4: "round(7.25)",
    answer: 1,
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choice1: "onmouseover",
    choice2: "onclick",
    choice3: "onmouseclick",
    choice4: "onchange",
    answer: 2,
  },
];

//constants for high score functions
const WRONG_ANSWERS = 5;
const TOTAL_QUESTIONS = 7;

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  //console.log(availableQuestions);
  getNewQuestion();
}

function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter >= TOTAL_QUESTIONS) {
    localStorage.setItem("endGameScore", secondsLeft);
    // localStorage.setItem("mostRecentScore", score);
    return window.location.assign("finalscore.html");
  }
  questionCounter++;
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    //set timer to decrease by 5 or 10 when wrong answer is selected
    if (classToApply === "incorrect") {
      secondsLeft -= 10;
      timerEl.textContent = "wrong -10";
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startGame();
