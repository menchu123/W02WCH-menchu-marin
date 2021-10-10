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

    for (let row = 0; row < 25; row++) {
        const newRow = document.createElement("div");
        gameBoard.appendChild(newRow);
        newRow.classList.add("game__row", `${row}`);
        board.push([]);

        for (let col = 0; col < 50; col++) {
            const newCell = document.createElement("div");

            newCell.classList.add("game__cell");
            newCell.setAttribute("id", `${row}-${col}`);
            newCell.style.backgroundColor = "#3d405b";
            newCell.onclick = lifeToggle;

            newRow.appendChild(newCell);
            board[row].push(0);
        }
    }
};

function lifeToggle() {
    const position = this.id.split("-");
    const positionx = position[0];
    const positiony = position[1];

    if (this.style.backgroundColor === "rgb(61, 64, 91)") {
        this.style.backgroundColor = "rgb(244, 241, 222)";
        board[positionx][positiony] = 1;
    } else {
        this.style.backgroundColor = "rgb(61, 64, 91)";
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
                    cell.style.backgroundColor = "rgb(61, 64, 91)";
                } else if (neighbors >= 2 && neighbors < 4) {
                    newBoard[x][y] = 1;

                    const cell = document.getElementById(`${x}-${y}`);
                    cell.style.backgroundColor = "rgb(244, 241, 222)";
                }
            } else if (currentBoard[x][y] === 0) {
                if (neighbors === 3) {
                    newBoard[x][y] = 1;

                    const cell = document.getElementById(`${x}-${y}`);
                    cell.style.backgroundColor = "rgb(244, 241, 222)";
                } else {
                    newBoard[x][y] = 0;

                    const cell = document.getElementById(`${x}-${y}`);
                    cell.style.backgroundColor = "rgb(61, 64, 91)";
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
        cell.style.backgroundColor = "rgb(61, 64, 91)";
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
