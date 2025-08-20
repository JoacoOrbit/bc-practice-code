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

function render(mapMat){
    const pacmap = document.querySelector(".pacmap");
    pacmap.innerHTML = "";

    for (let i = 0; i<mapMat.length; i++){
        for (let j = 0; j<mapMat[i].length; j++){
            switch(mapMat[i][j]){
                case 0:
                    pacmap.innerHTML += '<div class="wall"></div>';
                    break;
                case 1:
                    pacmap.innerHTML += '<div class="dot">·</div>';
                    break;
                case 2:
                    pacmap.innerHTML += '<div class="big-dot">•</div>';
                    break;
                case 3:
                    pacmap.innerHTML += '<div class="empty"></div>';
                    break;
                // case 4:
                //     pacmap.innerHTML += '<div class="pacman"></div>';
                //     break;
            }
        }
    }
    pacmap.innerHTML += '<div class="pacman"><img src="pacman0.png" alt="pacman"></div>';
}

render(map);

//Posicion inicial
let pacmanY = 23;
let pacmanX = 14;
let pacmanArray = map[pacmanY][pacmanX];
let pacmanDiv = document.querySelector(".pacman");
let blockWidth = 3.57;
let blockHeight = 3.22;
pacmanDiv.style.left = pacmanX * blockWidth + "%";
pacmanDiv.style.top = pacmanY * blockHeight + "%";
// mapMat[pacmanX][pacmanY] = 4;
let direction;
let pacSpeed = 0.5;

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

function movimiento (){
    
    switch (direction){
        case "up":
            pacmanY -= 1*pacSpeed;
            pacmanDiv.style.top = pacmanY * blockHeight + "%";
            pacImg.src = "pacman3.png";
            break;
        case "right":
            pacmanX += 1*pacSpeed;
            pacmanDiv.style.left = pacmanX * blockHeight + "%";
            pacImg.src = "pacman1.png";
            break;
        case "down":
            pacmanY += 1*pacSpeed;
            pacmanDiv.style.top = pacmanY * blockHeight + "%";
            pacImg.src = "pacman4.png";
            break;
        case "left":
            pacmanX -= 1*pacSpeed;
            pacmanDiv.style.left = pacmanX * blockHeight + "%";
            pacImg.src = "pacman2.png";
            break;
    }
    
pacmanDiv.style.left = pacmanX * blockWidth + "%";
pacmanDiv.style.top = pacmanY * blockHeight + "%";
};

function mapUpdate(){
    
}

// Hacer funcion que se mueva automaticamente con setinterval tomando en cuenta la variable

function game(){
    movimiento();
}

setInterval(game, 250);