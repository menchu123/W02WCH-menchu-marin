const { liveNeighbors, generateNewBoard } = require("./main");

describe("Given the liveNeighbors fuction", () => {
    describe("When it recieves a 3x3 board of 1s and the position of an item 0 in the bottom corner", () => {
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
});
