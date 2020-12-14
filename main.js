const container = document.querySelector('#container');
let rows = document.querySelector(".gridRow");
let cells = document.querySelector(".cell");
let reset = document.querySelector("#resetGrid");


function makeGrid(row, columns){
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', columns);
    for (let i=0; i < (row * columns); i++){
        let row = document.createElement("div");
        row.addEventListener('mouseover', changeGridColor);
        container.appendChild(row).className = "grid-items";
        };
};


function changeGridColor(c){
    this.style.backgroundColor = rainbow();
};

//reset the grid

function resetColors() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = 'white');
  };


function gridSize(){
    let size = prompt("Select grid size \n (max size 100)" );
    let grid = parseInt(size, 10);
    let eraseGrid = container.querySelectorAll('div');
    eraseGrid.forEach(eraseGrid => eraseGrid.remove());
    resetColors();
    if (size > 100){
        makeGrid(100, 100);
    }
    else makeGrid(grid, grid);
    
};

function rainbow() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

makeGrid(16, 16)



