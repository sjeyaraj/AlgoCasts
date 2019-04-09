// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {

//     for (i = 1; i <= n; i++) {
//         result = "#".repeat(i) + " ".repeat(n - i);
//         console.log(result);
//     }
// }

// function steps(n) {
//     for (let i = 0; i < n; i++) {
//         let result = "";
//         for (let j = 0; j < n; j++) {
//             if (j <= i) {
//                 result += "#";
//             } else {
//                 result += " ";
//             }
//         }
//         console.log(result);
//     }
// }

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1)
    }

    const add = stair.length <= row ? "#" : " ";
    steps(n, row, stair + add)
}
module.exports = steps;
