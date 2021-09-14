import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 *
 */
export default function getMatrixElementsSum(matrix ) {
  return matrix.reduce((sum, current,row) => sum + current.reduce((sumI, currentI, column) => (row === 0 || matrix[row-1][column] !== 0) ? sumI + currentI: sumI, 0), 0);
}
