

let gradient = 0.0;
const ADD_VALUE = 0.1;

let color = `hsla(0,0%,0%,${gradient}`;

function shadeBlack () {
    for (let i=0; i<amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", () => {
            gradient + ADD_VALUE;
        });
        board.insertAdjacentElement('beforeend', square);
      }
} 

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size * size;
for (let i=0; i<amount; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", colorSquare);
    square.addEventListener("mouseover", () => {
        gradient += ADD_VALUE;
    });
    board.insertAdjacentElement('beforeend', square);
  }
} 

populateBoard(16);

let setGrid = document.querySelector(".set-size");
    setGrid.addEventListener("click",() => {
        let newGrid = window.prompt("How many squares would you like?");
        if (newGrid != null && newGrid < 100) {
            populateBoard(newGrid);
        }
    });


let resetBoard = document.querySelector(".reset");
    resetBoard.addEventListener("click", () => {
        let squares = document.querySelectorAll('div');
        squares.forEach((div) => (div.style.backgroundColor = "white"));
    })

let black = document.querySelector(".black");
black.addEventListener("click", () => {
    changeColor ("black");
})

let eraser = document.querySelector(".eraser");
    eraser.addEventListener("click", () => {
        changeColor ("white");
    })

function changeColor(choice) {
    color = choice;
}

let random = document.querySelector(".random");
    random.addEventListener("click", () => {
        changeColor (`hsl(${Math.random () * 360}, 100%, 50%)`);
    })

function colorSquare() {
    this.style.backgroundColor = color;
}

