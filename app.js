let gameSeq = [];
let userSeq = [];

let colors = ["red","yellow","green","purple"];

let h2 = document.querySelector('h2');

const s1 = new Audio("btn1.mp3");
const s2 = new Audio("btn2.mp3");
const s3 = new Audio("btn3.mp3");
const s4 = new Audio("btn4.mp3");


let btn1 = document.getElementById("red");
let btn2 = document.getElementById("yellow");
let btn3 = document.getElementById("green");
let btn4 = document.getElementById("purple");


btn1.addEventListener("click",()=>{
    s1.play();
})

btn2.addEventListener("click",()=>{
    s2.play();
})

btn3.addEventListener("click",()=>{
    s3.play();
})

btn4.addEventListener("click",()=>{
    s4.play();
})

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
if(started == false){
    console.log("game started");
    

    levelUp();
    started = true;
}
});


function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
h2.innerText = `Level ${level}`;

//random btn choose
let randomIdx = Math.floor(Math.random() * 3);
let randomColor = colors[randomIdx];
let randomBtn = document.querySelector(`.${randomColor}`);


gameSeq.push(randomColor);
console.log(gameSeq);

btnFlash(randomBtn);
}

function checkAns(idx){
   let scores =[];
let highestScore = 0;
scores.push(level);

for (score of scores){
    if (score > highestScore){
        highestScore = score;
    }
}
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Highest Score - ${highestScore}<br></br>Game Over! Your score was ${level} <br></br>Press any key to start the game.`;
        let body = document.querySelector("body");
        body.classList.add("game-over");
        setTimeout(function(){
            body.classList.remove("game-over");
        },200);
         reset();
    }
}


function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
    
}

function reset(){
    userSeq = [];
    gameSeq=[];
    level = 0;
    started = false;
}













