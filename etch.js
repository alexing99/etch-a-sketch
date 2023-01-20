let color = `hsla(0,0%,0%`;

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
    board.insertAdjacentElement('beforeend', square);
  }
} 

populateBoard(16);

let setGrid = document.querySelector(".set-size");
    setGrid.addEventListener("click",() => {
        let newGrid = window.prompt("How many squares would you like? (eg. input 50 for a 50x50 grid. max is 100)");
        if (newGrid != null && newGrid < 101) {
            populateBoard(newGrid);
        }
    });


let resetBoard = document.querySelector(".reset");
    resetBoard.addEventListener("click", () => {
        let squares = document.querySelectorAll('.board div');
        squares.forEach((div) => (div.style.backgroundColor = "white"));
        squares.forEach((div) => (div.style.opacity = 0));
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
    const currentOpacity = Number (this.style.opacity);
    this.style.opacity = currentOpacity + .2;
}

