let color = 'black';
let click = 'false';

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }

}


populateBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        populateBoard(input);
    }
    else {
        console.log("Invalid Input");
    }

}

function colorSquare() {
    if (click) {
        this.style.backgroundColor = color;
    }

}
function changeColor(choice) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (choice === "random") {
        color = '#' + randomColor;
    }
    else {
        color = choice;
    }
}
function reset() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON") {

        click = !click
        if (click) {
            document.querySelector('.mode').textContent = "Colouring";
        }
        else {
            document.querySelector('.mode').textContent = "Not Colouring";
        }
    }
});
