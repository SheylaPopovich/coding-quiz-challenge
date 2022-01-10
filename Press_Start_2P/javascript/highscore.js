const scoreList = document.getElementById("scoreList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


scoreList.innerHTML = highScores

.map(score => {
   return `<li class="highscore">${score.name} ${score.score}</li>`;
})
.join("");


