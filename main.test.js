const { liveNeighbors, updateBoard } = require("./main");

describe("Given the liveNeighbors function", () => {
    describe("When it recieves a 3x3 board of 1s and the position of an item 0 in the bottom left corner", () => {
        test("Then it should return that the item has 3 neighbors", () => {
            const board = [
                [1, 1, 1],
                [1, 1, 1],
                [0, 1, 1],
            ];
            const positionX = 2;
            const positionY = 0;
            const expected = 3;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });

    describe("When it recieves a 3x3 board of 0s and the position of an item 0 in the center", () => {
        test("Then it should return that the item has 0 neighbors", () => {
            const board = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ];
            const positionX = 1;
            const positionY = 1;
            const expected = 0;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });

    describe("When it recieves a 3x3 board of 1s and the position of an item 0 in the center", () => {
        test("Then it should return that the item has 8 neighbors", () => {
            const board = [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
            ];
            const positionX = 1;
            const positionY = 1;
            const expected = 8;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });

    describe("When it recieves a 3x3 board of 1s and the position of an item 0 in the bottom right corner", () => {
        test("Then it should return that the item has 3 neighbors", () => {
            const board = [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
            ];
            const positionX = 2;
            const positionY = 2;
            const expected = 3;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });

    describe("When it recieves a 3x3 board of 1s and the position of an item 0 in the bottom right corner", () => {
        test("Then it should return that the item has 3 neighbors", () => {
            const board = [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 0],
            ];
            const positionX = 2;
            const positionY = 2;
            const expected = 3;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });

    describe("When it recieves a 3x3 board of 1s and 0s and the position of an item 0 in the top right corner", () => {
        test("Then it should return that the item has 1 neighbor", () => {
            const board = [
                [0, 0, 0],
                [0, 0, 1],
                [0, 0, 0],
            ];
            const positionX = 0;
            const positionY = 2;
            const expected = 1;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });

    describe("When it recieves a 3x3 board of 1s and 0s and the position of an item 0 in the left border", () => {
        test("Then it should return that the item has 0 neighbors", () => {
            const board = [
                [0, 0, 0],
                [1, 0, 0],
                [0, 0, 0],
            ];
            const positionX = 1;
            const positionY = 0;
            const expected = 0;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });

    describe("When it recieves a 3x3 board of 1s and 0s and the position of an item 0 in the top left corner", () => {
        test("Then it should return that the item has 1 neighbor", () => {
            const board = [
                [0, 0, 0],
                [1, 0, 0],
                [0, 0, 0],
            ];
            const positionX = 0;
            const positionY = 0;
            const expected = 1;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });

    describe("When it recieves a 3x3 board of 1s and 0s and the position of an item 0 in the top border", () => {
        test("Then it should return that the item has 2 neighbors", () => {
            const board = [
                [0, 0, 0],
                [1, 1, 0],
                [0, 0, 0],
            ];
            const positionX = 0;
            const positionY = 1;
            const expected = 2;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });

    describe("When it recieves a 3x3 board of 1s and 0s and the position of an item 0 in the bottom border", () => {
        test("Then it should return that the item has 2 neighbors", () => {
            const board = [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 1],
            ];
            const positionX = 2;
            const positionY = 1;
            const expected = 4;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });

    describe("When it recieves a 3x3 board of 1s and 0s and the position of an item 0 in the right border", () => {
        test("Then it should return that the item has 2 neighbors", () => {
            const board = [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 1],
            ];
            const positionX = 1;
            const positionY = 2;
            const expected = 2;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });

    describe("When it recieves a 3x3 board of 1s and 0s and the position of an item 0 in the right border", () => {
        test("Then it should return that the item has 2 neighbors", () => {
            const board = [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 1],
            ];
            const positionX = 1;
            const positionY = 2;
            const expected = 2;

            const result = liveNeighbors(board, positionX, positionY);

            expect(result).toBe(expected);
        });
    });
});

describe("Given the updateBoard fuction", () => {
    describe("When it recieves a 5x5 board of 0s and a vertical line of 1s in the center", () => {
        test("Then it should return a copy of the board that has a horizontal line", () => {
            const board = [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0],
            ];
            const expected = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
            ];

            const result = updateBoard(board);

            expect(result).toEqual(expected);
        });
    });

    describe("When it recieves a 5x5 board of 0s and two shapes of 1s in the corners", () => {
        test("Then it should return a copy of the board that has 2 squares of 1s", () => {
            const board = [
                [0, 0, 0, 0, 0, 0],
                [0, 1, 1, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0],
                [0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 0],
            ];
            const expected = [
                [0, 0, 0, 0, 0, 0],
                [0, 1, 1, 0, 0, 0],
                [0, 1, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 0],
            ];

            const result = updateBoard(board);

            expect(result).toEqual(expected);
        });
    });

    describe("When it recieves a 5x5 board of 0s and two shapes of 1s in the corners", () => {
        test("Then it should return a copy of the board that has 2 squares of 1s", () => {
            const board = [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 1, 0],
                [0, 1, 0, 0, 1, 0],
                [0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
            ];
            const expected = [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0],
                [0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
            ];

            const result = updateBoard(board);

            expect(result).toEqual(expected);
        });
    });
});
