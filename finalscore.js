function topPlayers(){
    for (let i = 0; i <  highScores.length; i++){
        const element = highScores[i]  
        console.log(element)
        const li =  document.createElement("li")   
        li.textContent= `NAME: ${element.name} Score: ${element.score}`
        console.log(scoreList, li)
        scoreList.appendChild(li)
    }
}

 let scoreNames = document.getElementById("scoreNames")

 scoreNames.onclick = topPlayers
