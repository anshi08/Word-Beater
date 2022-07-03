let heading = document.getElementsByClassName("header")
// console.log(heading)
// heading.style.backgroundcolor = "#808080"    .
document.body.style.backgroundColor = "darkgrey"

// let dis = document.getElementsByClassName("display")
//  console.log(dis)
// --------------------------------------------------------------------------------------------------------------------
//DOM ELEMENTS
window.addEventListener("load",init)

let wordinput = document.querySelector("#word")
// console.log(wordinput)
let currentWord = document.querySelector("#current-word")
// console.log(currentWord)
let scoredisplay = document.querySelector("#score-display")
// console.log(scoredisplay)
let timeDisplay = document.querySelector("#timedisplay")
// console.log(time)
let msg = document.querySelector("#message")
// console.log(msg)
let level = document.querySelector(".levels")
// console.log(level)

let score = 0
console.log("score",score)
let time = 6
// console.log(timer)
// console.log(score)
const words = [
    'hat',
    'river',
    'anshika' ,
    'javascript' ,
    'developer' ,
    'establishment'  ,
    'excursions' ,
    'aniket',
    'deepika',
    'absurd' ,
    'assertive' ,
    'horrendous'
]

let restartGame = false

function init(){
    showword(words) 
    wordinput.addEventListener("input",startmatch)
    setInterval(countdown,1000)
    document.getElementById("sel1").addEventListener("change",function(e){
        if(e.target.value == "easy"){
            alert("you alert is easy!!")
        } 
        else if(e.target.value == "medium"){
            alert("You alert is medium")
        }else{
            alert("you alert is hard")
        }
    })
    setInterval(restart,50) 
}



function startmatch(){
    if(matchwords()){
       showword(words)
      wordinput.value = ''
      score++;
      time = 6;
    }
    scoredisplay.innerHTML = score
}

function matchwords(){
    if(currentWord.innerHTML == wordinput.value){
        msg.innerHTML = "correct!!!"
    return true
    }
    else{
       msg.innerHTML = "incorrect!!!"
       return false
    }

}  

function showword(words){
    // console.log(words.length)
    const randomIdx = Math.floor(Math.random() * words.length)
    // console.log(words[randomIdx])
     currentWord.innerHTML = words[randomIdx]
}

function countdown(){
    if(time>0){
       time--;
    }
    timeDisplay.innerHTML = time==-1?"0":time    //time display -1 
}

function restart(){
    if(time == 0){
            alert("game over")
            time--;         //-1 aa rha hai !!
            restartGame = true
    }
    if(restartGame){
        restartGame = false
        window.location.reload()

    }

}




