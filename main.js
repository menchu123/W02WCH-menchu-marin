// crear array de 5x5

// let board = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0],
// ];

let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
];

// let board = [
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0],
// ];

// let board = [
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0],
//     [0, 1, 0, 0, 1, 0],
//     [0, 1, 0, 0, 1, 0],
//     [0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
// ];

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

const generateNewBoard = (currentBoard) => {
    const newBoard = [];

    for (let x = 0; x < currentBoard.length; x++) {
        newBoard.push([]);
        for (let y = 0; y < currentBoard[x].length; y++) {
            const neighbors = liveNeighbors(currentBoard, x, y);

            if (currentBoard[x][y] === 1) {
                if (neighbors < 2 || neighbors >= 4) {
                    newBoard[x][y] = 0;
                } else if (neighbors >= 2 && neighbors < 4) {
                    newBoard[x][y] = 1;
                }
            } else if (currentBoard[x][y] === 0) {
                if (neighbors === 3) {
                    newBoard[x][y] = 1;
                } else {
                    newBoard[x][y] = 0;
                }
            }
        }
    }
    board = newBoard;
    return board;
};

// setInterval(() => {
//     board = generateNewBoard(board);
//     console.log(board);
// }, 1000);

module.exports = { liveNeighbors, generateNewBoard };
