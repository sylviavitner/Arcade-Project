// Board
let board;
let boardWidth = 700;
let boardHeight = 350;
let context;

// Player
let playerWidth = 22;
let playerHeight = 16; 
let playerX = 50;
let playerY = boardHeight - playerHeight; 
let playerImg;

let player = {
    x : playerX,
    y : playerY,
    width : playerWidth,
    height : playerHeight,
};

window.onload = function () {
    // Initialize the board (get canvas tag)
    board = document.getElementById("board");

    // Set canvas size
    board.width = boardWidth;
    board.height = boardHeight;

    context = board.getContext("2d"); // Get the drawing context

    // Load player image (sprite sheet)
    /**
     * Something isn't working here - the image is not loading.
     */

    playerImg = new Image();
    playerImg.src = "./Assets/squirrel1.png"; 
    playerImg.onload = function() {
        context.drawImage(playerImg, player.x, player.y, player.width, player.height)
    }
};
