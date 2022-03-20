const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let result = matrix.concat([]).map(item => item.map(elem => elem = 0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        for (let a = -1; a < 2; a++) {
          for (let b = -1; b < 2; b++) {
            if (i+a >= 0 && j+b >= 0 && i+a <= matrix[i].length && j+b <= matrix.length) {
              result[i+a][j+b] += 1;
            }
          }
        }
        result[i][j] -= 1;
      }
    }
  }
  return result
}

module.exports = {
  minesweeper
};
