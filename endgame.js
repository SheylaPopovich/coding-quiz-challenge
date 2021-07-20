const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

//covert array to string using JSON.stringify
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const TOP_THREE_SCORES = 3;


finalScore.innerText = mostRecentScore;




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

    console.log(highScores);
};

