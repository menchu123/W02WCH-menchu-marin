// crear array de 5x5

// let board = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0],
// ];

// let board = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
// ];

// let board = [
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0],
// ];

// colors

const lightBackground = "rgb(255, 254, 250)";
const lightDeadCell = "rgb(238, 235, 223)";

// random live colors
const light1 = "rgb(95, 15, 64)";
const light2 = "rgb(154, 3, 30)";
const light3 = "rgb(251, 139, 36)";
const light4 = "rgb(227, 100, 20)";
const light5 = "rgb(15, 76, 92)";

// generate random color
const randomLiveColor = () => {
    const randomColors = [light1, light2, light3, light4, light5];
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    return randomColors[randomIndex];
};

let board = [];

const liveNeighbors = (boardReference, x, y) => {
    let neighbors = 0;

    if (x === 0 && y === 0) {
        // top left corner case
        if (boardReference[x][y + 1] === 1) neighbors++;
        if (boardReference[x + 1][y] === 1) neighbors++;
        if (boardReference[x + 1][y + 1] === 1) neighbors++;
    } else if (x === 0 && y === boardReference[y].length - 1) {
        // top right corner case
        if (boardReference[x][y - 1] === 1) neighbors++;
        if (boardReference[x + 1][y - 1] === 1) neighbors++;
        if (boardReference[x + 1][y] === 1) neighbors++;
    } else if (x === boardReference[x].length - 1 && y === 0) {
        // bottom left corner case
        if (boardReference[x - 1][y] === 1) neighbors++;
        if (boardReference[x][y + 1] === 1) neighbors++;
        if (boardReference[x - 1][y + 1] === 1) neighbors++;
    } else if (
        x === boardReference[x].length - 1 &&
        y === boardReference[y].length - 1
    ) {
        // bottom right corner case
        if (boardReference[x][y - 1] === 1) neighbors++;
        if (boardReference[x - 1][y - 1] === 1) neighbors++;
        if (boardReference[x - 1][y] === 1) neighbors++;
    } else if (x === 0) {
        // top border case
        if (boardReference[x][y - 1] === 1) neighbors++;
        if (boardReference[x + 1][y - 1] === 1) neighbors++;
        if (boardReference[x + 1][y] === 1) neighbors++;
        if (boardReference[x + 1][y + 1] === 1) neighbors++;
        if (boardReference[x][y + 1] === 1) neighbors++;
    } else if (x === boardReference[x].length - 1) {
        // bottom border case
        if (boardReference[x][y - 1] === 1) neighbors++;
        if (boardReference[x - 1][y - 1] === 1) neighbors++;
        if (boardReference[x - 1][y] === 1) neighbors++;
        if (boardReference[x - 1][y + 1] === 1) neighbors++;
        if (boardReference[x][y + 1] === 1) neighbors++;
    } else if (y === boardReference[y].length - 1) {
        // right border case
        if (boardReference[x - 1][y] === 1) neighbors++;
        if (boardReference[x - 1][y - 1] === 1) neighbors++;
        if (boardReference[x][y - 1] === 1) neighbors++;
        if (boardReference[x + 1][y - 1] === 1) neighbors++;
        if (boardReference[x + 1][y] === 1) neighbors++;
    } else if (y === 0) {
        // left border case
        if (boardReference[x - 1][y] === 1) neighbors++;
        if (boardReference[x - 1][y + 1] === 1) neighbors++;
        if (boardReference[x][y + 1] === 1) neighbors++;
        if (boardReference[x + 1][y + 1] === 1) neighbors++;
        if (boardReference[x + 1][y] === 1) neighbors++;
    } else {
        if (boardReference[x - 1][y] === 1) neighbors++;
        if (boardReference[x - 1][y - 1] === 1) neighbors++;
        if (boardReference[x][y - 1] === 1) neighbors++;
        if (boardReference[x + 1][y - 1] === 1) neighbors++;
        if (boardReference[x + 1][y] === 1) neighbors++;
        if (boardReference[x + 1][y + 1] === 1) neighbors++;
        if (boardReference[x][y + 1] === 1) neighbors++;
        if (boardReference[x - 1][y + 1] === 1) neighbors++;
    }
    return neighbors;
};

const generateBoard = () => {
    const gameBoard = document.querySelector(".game");

    for (let row = 0; row < 35; row++) {
        const newRow = document.createElement("div");
        gameBoard.appendChild(newRow);
        newRow.classList.add("game__row", `${row}`);
        board.push([]);

        for (let col = 0; col < 35; col++) {
            const newCell = document.createElement("div");

            newCell.classList.add("game__cell");
            newCell.setAttribute("id", `${row}-${col}`);
            newCell.style.backgroundColor = lightDeadCell;
            newCell.onclick = lifeToggle;

            newRow.appendChild(newCell);
            board[row].push(0);
        }
    }
};
console.log(board);
function lifeToggle() {
    const position = this.id.split("-");
    const positionx = position[0];
    const positiony = position[1];

    if (this.style.backgroundColor === lightDeadCell) {
        this.style.backgroundColor = randomLiveColor();
        board[positionx][positiony] = 1;
    } else {
        this.style.backgroundColor = lightDeadCell;
        board[positionx][positiony] = 0;
    }
}

generateBoard();

const updateBoard = (currentBoard) => {
    const newBoard = [];

    for (let x = 0; x < currentBoard.length; x++) {
        newBoard.push([]);
        for (let y = 0; y < currentBoard[x].length; y++) {
            const neighbors = liveNeighbors(currentBoard, x, y);

            if (currentBoard[x][y] === 1) {
                if (neighbors < 2 || neighbors >= 4) {
                    newBoard[x][y] = 0;

                    const cell = document.getElementById(`${x}-${y}`);
                    cell.style.backgroundColor = lightDeadCell;
                } else if (neighbors >= 2 && neighbors < 4) {
                    newBoard[x][y] = 1;

                    const cell = document.getElementById(`${x}-${y}`);
                    cell.style.backgroundColor = randomLiveColor();
                }
            } else if (currentBoard[x][y] === 0) {
                if (neighbors === 3) {
                    newBoard[x][y] = 1;

                    const cell = document.getElementById(`${x}-${y}`);
                    cell.style.backgroundColor = randomLiveColor();
                } else {
                    newBoard[x][y] = 0;

                    const cell = document.getElementById(`${x}-${y}`);
                    cell.style.backgroundColor = lightDeadCell;
                }
            }
        }
    }
    board = newBoard;
    return board;
};

const clearBoard = (currentBoard) => {
    const cells = document.querySelectorAll(".game__cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = lightDeadCell;
    });
    for (let i = 0; i < currentBoard.length; i++) {
        for (let j = 0; j < currentBoard[i].length; j++) {
            currentBoard[i][j] = 0;
        }
    }
};

let interval = null;
const start = () => {
    interval = setInterval(() => {
        board = updateBoard(board);
        console.log(board);
    }, 1000);
};

const stop = () => {
    clearInterval(interval);
};

const reset = () => {
    clearInterval(interval);
    clearBoard(board);
};

// module.exports = { liveNeighbors, updateBoard };
