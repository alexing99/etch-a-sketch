/*
1. create webpage with a 16*16 grid of square divs 
    - so one big div (mainDiv) and then 16 divs flexed inside (with js)
2. add hover effect 
    - add eventlistner for hover and then change color of gridDiv
3. add a button that makes a popup that asks to make a bigger grid (100max)
*/

function populateBoard(size) {
    let board = document.querySelector(".board");
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

