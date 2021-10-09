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
let newBoard;

const liveNeighbors = (boardA, i, j) => {
    debugger;
    let neighbors = 0;
    debugger;
    if (i === 0 && j === 0) {
        if (boardA[i][j + 1] === 1) neighbors++;
        if (boardA[i + 1][j] === 1) neighbors++;
        if (boardA[i + 1][j + 1] === 1) neighbors++;
    }
    neighbors.push(
        boardA[i - 1][j - 1],
        boardA[i - 1][j],
        boardA[i - 1][j + 1],
        boardA[i][j - 1],
        boardA[i][j + 1],
        boardA[i + 1][j - 1],
        boardA[i + 1][j],
        boardA[i + 1][i + 1]
    );
};

const boardLoop = (currentBoard) => {
    debugger;
    newBoard = currentBoard.slice();

    debugger;
    for (i; i < newBoard.length; i++) {
        for (j; j < newBoard[i].length; j++) {
            const neighbors = liveNeighbors(currentBoard, i, j);
            debugger;
            if (isOne(currentBoard[i][j]) && neighbors >= 2 && neighbors < 4) {
                debugger;
                return;
            }
            if (isOne(currentBoard[i][j]) && neighbors < 2 && neighbors > 4) {
                debugger;
                newBoard[i][j] = 0;
                return;
            }
            if (isZero(currentBoard[i][j], i, j) && neighbors === 3) {
                debugger;
                newBoard[i][j] = 1;
            }
        }
    }
    return newBoard;
};

newBoard = boardLoop(board);

console.log(newBoard);
