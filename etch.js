/*
1. create webpage with a 16*16 grid of square divs 
    - so one big div (mainDiv) and then 16 divs flexed inside (with js)
2. add hover effect 
    - add eventlistner for hover and then change color of gridDiv
3. add a button that makes a popup that asks to make a bigger grid (100max)
*/

let board = document.querySelector(".board");
    board.style.gridTemplateColumns = "repeat(16 , 1fr)";
    board.style.gridTemplateRows = "repeat(16 , 1fr)";
    
for (let i=0; i<256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement('beforeend', square);
}