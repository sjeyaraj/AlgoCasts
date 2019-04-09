//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix is shown below:
// 1 2 3
// 4 5 6
// 9 8 9

function diagonalDifference(arr) {
  let leftToRight = 0;
  let rightToLeft = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (n !== arr[i].length) {
      return "Array is not square";
    }
    for (let j = 0; j < n; j++) {
      if (i === j) {
        leftToRight += arr[i][j];
      }
      if (i + j === n - 1) {
        rightToLeft += arr[i][j];
      }
    }
  }
  return Math.abs(rightToLeft - leftToRight);
}
