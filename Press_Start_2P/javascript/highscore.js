let scoreList = document.getElementById("scoreList");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];


scoreList.innerHTML = highScores

.map(score => {
   return `<li class="highscore">${score.name} ${score.score}</li>`;
})
.join("");


