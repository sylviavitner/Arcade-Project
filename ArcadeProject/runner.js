// board
let board;
let boardWidth = 640;
let boardHeight = 360;
let context;

// player
let playerWidth = 22;
let playerHeight = 16; 
let playerX = 80;
let playerY = boardHeight - playerHeight;
let playerImgs = []; // store all player images
let currentFrame = 0; // to keep track of the current frame
let frameDelay = 15; // change this value to adjust animation speed
let frameCount = 0; // frame counter

// background
let bgImg;
let bgX = 0;  // background x position
let bgSpeed = 1.4; // background scroll speed

let gameStarted = false; // to control when the game starts (space is pressed)

let player = {
    x : playerX,
    y : playerY,
    width : playerWidth,
    height : playerHeight
};

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); // used for drawing on board

    // load background image
    bgImg = new Image();
    bgImg.src = "Assets/forest-bg.png";

    // load player images (animation frames)
    for (let i = 1; i <= 4; i++) {
        let img = new Image();
        img.src = `Assets/squirrel${i}.png`;
        playerImgs.push(img);
    }

    // start game when all images have loaded
    bgImg.onload = playerImgs[0].onload = function() {
        document.addEventListener('keydown', startGame);
        requestAnimationFrame(update);
    };
}

// function to start game when space is pressed
function startGame(event) {
    if (event.code === "Space") { 
        gameStarted = true;
    }
}

function update() {
    requestAnimationFrame(update);

    if (gameStarted) {
        // move the background to the left
        bgX -= bgSpeed;

        // if the background has completely scrolled off the screen, reset it
        if (bgX <= -boardWidth) {
            bgX = 0;
        }

        // handle player frame animation
        frameCount++;
        if (frameCount >= frameDelay) {
            currentFrame = (currentFrame + 1) % playerImgs.length; // loop through frames
            frameCount = 0; // reset frame counter
        }
    }

    // draw two instances of the background to create an infinite scrolling effect
    context.drawImage(bgImg, bgX, 0, boardWidth, boardHeight);
    context.drawImage(bgImg, bgX + boardWidth, 0, boardWidth, boardHeight);

    // draw the current frame of the player
    context.drawImage(playerImgs[currentFrame], player.x, player.y, player.width, player.height);
}

