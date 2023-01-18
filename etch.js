/*
3. add a button that makes a popup that asks to make a bigger grid (100max)
4. add a clear button
5. add a color selector
*/

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
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
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
        console.log ("it works");
    })


