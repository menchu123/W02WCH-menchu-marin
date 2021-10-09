// crear array de 5x5

const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

console.table(board);

const isOne = (item) => {
    item === 1;
};
const isZero = (item) => {
    item === 0;
};

const liveNeighbors = (boardA, x, y) => {
    debugger;
    let neighbors = 0;
    debugger;

    if (x === 0 && y === 0) {
        // top left corner case
        if (boardA[x][y + 1] === 1) neighbors++;
        if (boardA[x + 1][y] === 1) neighbors++;
        if (boardA[x + 1][y + 1] === 1) neighbors++;
    } else if (x === 0 && y === boardA[y].length - 1) {
        // top right corner case
        if (boardA[x][y - 1] === 1) neighbors++;
        if (boardA[x + 1][y - 1] === 1) neighbors++;
        if (boardA[x + 1][y] === 1) neighbors++;
    } else if (x === boardA[x].length - 1 && y === 0) {
        // bottom left corner case
        if (boardA[x - 1][y] === 1) neighbors++;
        if (boardA[x][y + 1] === 1) neighbors++;
        if (boardA[x - 1][y + 1] === 1) neighbors++;
    } else if (x === boardA[x].length - 1 && y === boardA[y].length - 1) {
        // bottom right corner case
        if (boardA[x][y - 1] === 1) neighbors++;
        if (boardA[x - 1][y - 1] === 1) neighbors++;
        if (boardA[x - 1][y] === 1) neighbors++;
    } else if (x === 0) {
        // top border case
        if (boardA[x][y - 1] === 1) neighbors++;
        if (boardA[x + 1][y - 1] === 1) neighbors++;
        if (boardA[x + 1][y] === 1) neighbors++;
        if (boardA[x + 1][y + 1] === 1) neighbors++;
        if (boardA[x][y + 1] === 1) neighbors++;
    } else if (x === boardA[x].length - 1) {
        // bottom border case
        if (boardA[x][y - 1] === 1) neighbors++;
        if (boardA[x - 1][y - 1] === 1) neighbors++;
        if (boardA[x - 1][y] === 1) neighbors++;
        if (boardA[x - 1][y + 1] === 1) neighbors++;
        if (boardA[x][y + 1] === 1) neighbors++;
    } else if (y === boardA[y].length - 1) {
        // right border case
        if (boardA[x - 1][y] === 1) neighbors++;
        if (boardA[x - 1][y - 1] === 1) neighbors++;
        if (boardA[x][y - 1] === 1) neighbors++;
        if (boardA[x + 1][y - 1] === 1) neighbors++;
        if (boardA[x + 1][y] === 1) neighbors++;
    } else if (y === 0) {
        // left border case
        if (boardA[x - 1][y] === 1) neighbors++;
        if (boardA[x - 1][y + 1] === 1) neighbors++;
        if (boardA[x][y + 1] === 1) neighbors++;
        if (boardA[x + 1][y + 1] === 1) neighbors++;
        if (boardA[x + 1][y] === 1) neighbors++;
    } else {
        if (boardA[x - 1][y] === 1) neighbors++;
        if (boardA[x - 1][y - 1] === 1) neighbors++;
        if (boardA[x][y - 1] === 1) neighbors++;
        if (boardA[x + 1][y - 1] === 1) neighbors++;
        if (boardA[x + 1][y] === 1) neighbors++;
        if (boardA[x + 1][y + 1] === 1) neighbors++;
        if (boardA[x][y + 1] === 1) neighbors++;
        if (boardA[x - 1][y + 1] === 1) neighbors++;
    }
    return neighbors;
};

const boardLoop = (currentBoard) => {
    debugger;
    const newBoard = currentBoard.slice();

    debugger;
    for (let x = 0; x < newBoard.length; x++) {
        for (let y = 0; y < newBoard[x].length; y++) {
            const neighbors = liveNeighbors(newBoard, x, y);
            debugger;
            if (isOne(newBoard[x][y]) && neighbors >= 2 && neighbors < 4) {
                debugger;
                return;
            }
            if (isOne(newBoard[x][y]) && neighbors < 2 && neighbors > 4) {
                debugger;
                newBoard[x][y] = 0;
                return;
            }
            if (isZero(newBoard[x][y], x, y) && neighbors === 3) {
                debugger;
                newBoard[x][y] = 1;
            }
        }
    }
    return newBoard;
};

const newBoard = boardLoop(board);

console.table(newBoard);

const neighbors = liveNeighbors(board, 3, 2);

console.log(neighbors);
