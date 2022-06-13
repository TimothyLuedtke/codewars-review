// Insane Coloured Triangles

// Disclaimer
// This Kata is an insane step-up from Avanta's Kata, so I recommend to solve it first before trying this one.

// Problem Description
// A coloured triangle is created from a row of colours, each of which is red, green or blue. Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the previous row. If these colours are identical, the same colour is used in the new row. If they are different, the missing colour is used in the new row. This is continued until the final row, with only a single colour, is generated.

// For example, different possibilities are:

// Colour here:            G G        B G        R G        B R
// Becomes colour here:     G          R          B          G
// With a bigger example:

// R R G B R G B B
//  R B R G B R B
//   G G B R G G
//    G R G B G
//     B B R R
//      B G R
//       R B
//        G
// You will be given the first row of the triangle as a string and its your job to return the final colour which would appear in the bottom row as a string. In the case of the example above, you would be given 'RRGBRGBB', and you should return 'G'.

// Constraints
// 1 <= length(row) <= 10 ** 5

// The input string will only contain the uppercase letters 'B', 'G' or 'R'.

// Examples
// triangle('B') == 'B'
// triangle('GB') == 'R'
// triangle('RRR') == 'R'
// triangle('RGBG') == 'B'
// triangle('RBRGBRB') == 'G'
// triangle('RBRGBRBGGRRRBGBBBGG') == 'G'

function triangle(row) {
    let vector = [];
    while (row.length) {
      vector.push(...row.split(''));
      row = row.slice(1);
    }
    return vector.pop();
  }
