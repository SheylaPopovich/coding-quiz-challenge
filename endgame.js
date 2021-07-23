const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = JSON.parse(localStorage.getItem("highScores"));

const endGameScore = localStorage.getItem("endGameScore")

//covert array to string using JSON.stringify
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


const TOP_THREE_SCORES = 3;

finalScore.innerText = "Final Score: " + endGameScore;


//disabled saveScoreBtn to direct user to input initials in placeholder
username.addEventListener("keyup", () => {
   saveScoreBtn.disabled = !username.value;
});


saveHighScore = e => {
    e.preventDefault();
 
    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value 
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(3);
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

const scoreList= document.getElementById("scoreList")