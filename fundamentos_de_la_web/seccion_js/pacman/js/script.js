let map =[  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
            [0,2,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,2,0],
            [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
            [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
            [0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],
            [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
            [3,3,3,3,3,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,3,3,3,3,3],
            [3,3,3,3,3,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,3,3,3,3,3],
            [3,3,3,3,3,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,3,3,3,3,3],
            [0,0,0,0,0,0,1,0,0,1,0,3,3,3,3,3,3,0,1,0,0,1,0,0,0,0,0,0],
            [3,3,3,3,3,3,1,1,1,1,0,3,3,3,3,3,3,0,1,1,1,1,3,3,3,3,3,3],
            [0,0,0,0,0,0,1,0,0,1,0,3,3,3,3,3,3,0,1,0,0,1,0,0,0,0,0,0],
            [3,3,3,3,3,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,3,3,3,3,3],
            [3,3,3,3,3,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,3,3,3,3,3],
            [3,3,3,3,3,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,3,3,3,3,3],
            [0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
            [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
            [0,2,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,2,0],
            [0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
            [0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
            [0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],
            [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];

// let dict = {
//     0: "wall",
//     1: "dot",
//     2: "bigDot",
//     3: "empty",
//     4: "pacman",
//     5: "ghost"
// }

const pacmap = document.querySelector(".pacmap");

function render(){
    pacmap.innerHTML = "";

    for (let i = 0; i<map.length; i++){
        for (let j = 0; j<map[i].length; j++){
            switch(map[i][j]){
                case 0:
                    pacmap.innerHTML += `<div class="wall" id="pm${i}-${j}"></div>`;
                    break;
                case 1:
                    pacmap.innerHTML += `<div class="dot" id="pm${i}-${j}">·</div>`;
                    break;
                case 2:
                    pacmap.innerHTML += `<div class="big-dot" id="pm${i}-${j}">•</div>`;
                    break;
                case 3:
                    pacmap.innerHTML += `<div class="empty" id="pm${i}-${j}"></div>`;
                    break;
                // case 4:
                //     pacmap.innerHTML += '<div class="pacman"></div>';
                //     break;
            }
        }
    }
}

render(map);

// pacmap.innerHTML += '<div class="pacman"><img src="pacman0.png" alt="pacman"></div>';

//Posicion inicial
let pacmanY = 23;
let pacmanX = 14;
// let pacmanArray = map[pacmanY][pacmanX];
let pacmanDiv = document.querySelector(".pacman");
let blockWidth = 3.57;
let blockHeight = 3.22;
pacmanDiv.style.left = pacmanX * blockWidth + "%";
pacmanDiv.style.top = pacmanY * blockHeight + "%";
// mapMat[pacmanX][pacmanY] = 4;
let direction;
// let pacSpeed = 0.5;
let points = 0;
let pointElement = document.querySelector("#points");

let pacImg = document.querySelector("img");

document.addEventListener('keydown', (event) => {
    // console.log(event.key);
    switch(event.key) {
        case "ArrowUp":
            direction = "up";
            break;
        case "ArrowDown":
            direction = "down";
            break;
        case "ArrowLeft":
            direction = "left";
            break;
        case "ArrowRight":
            direction = "right";
            break;
    }
})

// make pacman moves based on the current direction

function movimiento (){
    
    switch (direction){
        case "up":
            pacImg.src = "images/pacman3.png";
            if (map[pacmanY-1][pacmanX] != 0){
                pacmanY --;
                pacmanDiv.style.top = pacmanY * blockHeight + "%";
                //14.5
            }
            break;
        case "right":
            pacImg.src = "images/pacman1.png";
            if (map[pacmanY][pacmanX+1] != 0){
                pacmanX ++;
                pacmanDiv.style.left = pacmanX * blockHeight + "%";
            }
            break;
        case "down":
            pacImg.src = "images/pacman4.png";
            if (map[pacmanY+1][pacmanX] != 0){
                pacmanY ++;
                pacmanDiv.style.top = pacmanY * blockHeight + "%";
            }
            break;
        case "left":
            pacImg.src = "images/pacman2.png";
            if (map[pacmanY][pacmanX-1] != 0){
                pacmanX --;
                pacmanDiv.style.left = pacmanX * blockHeight + "%";
            }
            break;
    }

    if (pacmanX==27 && pacmanY==14) {
        pacmanX=1;
    } else if (pacmanX==0 && pacmanY==14) {
        pacmanX=26;
    }
    
pacmanDiv.style.left = pacmanX * blockWidth + "%";
pacmanDiv.style.top = pacmanY * blockHeight + "%";
};

// adds functionality to big dots

function turbo(){
    // pacSpeed = 1;
    pacmanDiv.style.backgroundColor = "blue";
    setTimeout(() => {
        pacmanDiv.style.backgroundColor = "";}
        ,10000);
    
    // pacSpeed = 0.5;
}

// updates map based on eaten dots

function mapUpdate(){
    // pacmanArray = map[pacmanY][pacmanX]
    switch (map[pacmanY][pacmanX]) {
        case 1:
            document.querySelector("#pm"+[pacmanY]+"-"+[pacmanX]).classList.remove("dot");
            document.querySelector("#pm"+[pacmanY]+"-"+[pacmanX]).classList.add("empty");
            map[pacmanY][pacmanX] = 3;
            addPoints("dot");
            break;
        case 2:
            document.querySelector("#pm"+[pacmanY]+"-"+[pacmanX]).classList.remove("big-dot");
            document.querySelector("#pm"+[pacmanY]+"-"+[pacmanX]).classList.add("empty");
            turbo();
            map[pacmanY][pacmanX] = 3;
            addPoints("big-dot");
            break;
    }
}

let alertContainer = document.querySelector(".alert-container");
let winAlert = document.querySelector(".win");
let lossAlert = document.querySelector(".loss");

// checks to see if there are no dots left and win

function checkResult () {
    let areThereDots = document.querySelectorAll(".dot, .big-dot");

    if (areThereDots.length == 0) {
        pacmanDiv.remove();
        alertContainer.classList.toggle("hidden");
        winAlert.classList.toggle("hidden");
        clearInterval(gaming);
        clearInterval(result);
    }
    return areThereDots;
}

// add points based on the type of item eaten

function addPoints (type) {
    let pointsToInt = parseInt(pointElement.textContent);
    if (type == "dot") {
        pointsToInt += 5;
    } else if (type == "big-dot") {
        pointsToInt += 20;
    } else if (typpe == "cherry") {
        pointsToInt += 100;
    }
    pointElement.textContent = pointsToInt;
}

function timeCounter (){
    let timeElement = document.querySelector("#time");
    let currentTime = timeElement.textContent;
    let timeSplit = currentTime.split(":");
    let minutes = timeSplit[0];
    let seconds = timeSplit[1];
    if (seconds > 0) {
        seconds--;
    } else {
        minutes--;
        seconds=59;
    }
    timeElement.textContent = minutes + ":" + seconds; 
}

// Hacer funcion que se mueva automaticamente con setinterval tomando en cuenta la variable

// make games run

function game(){
    movimiento();
    // console.log(map[pacmanY][pacmanX])
    mapUpdate();
    // console.log(pacmanArray);
    // console.log(map[pacmanY][pacmanX])
}

function statusCheck(){
    checkResult();
    timeCounter();
}

// setTimeout(() => {
//     let debugDots = document.querySelectorAll(".dot, .big-dot");
//     debugDots.forEach(element => {
//         element.classList.remove("dot")
//         element.classList.remove("big-dot")
//     });
// }, 10000);

//game updates constantly

const gaming = setInterval(game, 400);
const result = setInterval(statusCheck, 1000)
// setInterval(render, 1000);