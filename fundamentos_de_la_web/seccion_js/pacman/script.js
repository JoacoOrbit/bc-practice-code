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
            pacImg.src = "pacman3.png";
            if (map[pacmanY-1][pacmanX] != 0){
                pacmanY --;
                pacmanDiv.style.top = pacmanY * blockHeight + "%";
                //14.5
            }
            break;
        case "right":
            pacImg.src = "pacman1.png";
            if (map[pacmanY][pacmanX+1] != 0){
                pacmanX ++;
                pacmanDiv.style.left = pacmanX * blockHeight + "%";
            }
            break;
        case "down":
            pacImg.src = "pacman4.png";
            if (map[pacmanY+1][pacmanX] != 0){
                pacmanY ++;
                pacmanDiv.style.top = pacmanY * blockHeight + "%";
            }
            break;
        case "left":
            pacImg.src = "pacman2.png";
            if (map[pacmanY][pacmanX-1] != 0){
                pacmanX --;
                pacmanDiv.style.left = pacmanX * blockHeight + "%";
            }
            break;
    }
    
pacmanDiv.style.left = pacmanX * blockWidth + "%";
pacmanDiv.style.top = pacmanY * blockHeight + "%";
};

function turbo(){
    pacSpeed = 1;
    setTimeout(5000);
    pacSpeed = 0.5;
}

function mapUpdate(){
    // pacmanArray = map[pacmanY][pacmanX]
    switch (map[pacmanY][pacmanX]) {
        case 1:
            map[pacmanY][pacmanX] = 3;
            break;
        case 2:
            turbo();
            break;
    }
}

// Hacer funcion que se mueva automaticamente con setinterval tomando en cuenta la variable

function game(){
    movimiento();
    mapUpdate();
    console.log(pacmanArray);
    console.log(map[pacmanY][pacmanX])
}

setInterval(game, 400);
// setInterval(render, 1000);