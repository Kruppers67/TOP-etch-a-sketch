const headerBox = document.getElementById('header-box');

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Etch A Sketch!'
headerBox.appendChild(title);



const backgroundBox = document.getElementById('background-box');

const gridContainer = document.createElement('div');
gridContainer.className = 'grid-box';
backgroundBox.appendChild(gridContainer);

const inputButton = document.createElement('button');
inputButton.className = 'input-btn';
inputButton.textContent = 'Change Canvas Size!';
backgroundBox.appendChild(inputButton);

let isDrawing = false;

document.addEventListener('mousedown', () => {
    isDrawing = true;
});
document.addEventListener('mouseup', () => {
    isDrawing = false;
});


function createGrid(boxesPerRow) {
    const containerSize = 400;
    const boxSize = containerSize / boxesPerRow;
    const totalBoxes = boxesPerRow * boxesPerRow;

    for (i = 0;i < totalBoxes; i++) {
        const square = document.createElement('div');
        square.className = 'grid-boxes';
        square.style.width = `${boxSize}px`;
        square.style.height = `${boxSize}px`;
        gridContainer.appendChild(square);
        square.addEventListener('mousedown', () => {
            square.style.backgroundColor = 'black';
        });
        square.addEventListener('mouseenter', () => {
            if (isDrawing) {
                square.style.backgroundColor = 'black';
            }
        });

    }
}

function userGridSelection() {
    let size = prompt("Please input value:");
    if (size <= 100) {
        gridContainer.innerHTML = '';
        return createGrid(size);
    }
}
createGrid(20);
inputButton.addEventListener('click', () => {
    userGridSelection();
});