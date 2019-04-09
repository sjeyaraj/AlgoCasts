// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {

//     const midPoint = Math.floor((2 * n - 1) / 2);
//     for (let i = 0; i < n; i++) {
//         let result = ""
//         for (let j = 0; j < 2 * n - 1; j++) {
//             if (midPoint - i <= j && midPoint + i >= j) {
//                 result += "#";
//             } else {
//                 result += " ";
//             }
//         }
//         console.log(result);
//     }
// }

function pyramid(n, row = 0, level = '') {

    //check the n reaches row - base condition
    if (n === row) {
        return;
    }
    //check the level reached boundry then print value
    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    // find mid point
    const midPoint = Math.floor((2 * n - 1) / 2);

    // check boundry and add # or space
    const add = midPoint - row <= level.length && midPoint + row >= level.length ? "#" : " ";
    return pyramid(n, row, level + add)
    //

}

module.exports = pyramid;
