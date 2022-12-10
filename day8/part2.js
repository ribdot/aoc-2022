const { input } = require("./input.js");

function calculateVisibility(row, col) {
    let topVisibleCount = 0;
    for (let i = row - 1; i >= 0; i--) {
        topVisibleCount++;
        if (input[row][col] <= input[i][col]) {
            break;
        }
    }

    let bottomVisibleCount = 0;
    for (let i = row + 1; i < input.length; i++) {
        bottomVisibleCount++;
        if (input[row][col] <= input[i][col]) {
            break;
        }
    }

    let leftVisibleCount = 0;
    for (let i = col - 1; i >= 0; i--) {
        leftVisibleCount++;
        if (input[row][col] <= input[row][i]) {
            break;
        }
    }

    let rightVisibleCount = 0;
    for (let i = col + 1; i < input[row].length; i++) {
        rightVisibleCount++;
        if (input[row][col] <= input[row][i]) {
            break;
        }
    }

    return topVisibleCount * bottomVisibleCount * rightVisibleCount * leftVisibleCount;
}

let bestVisibilityScore = 0;
for (let row = 1; row < input.length - 1; row++) {
    for (let col = 1; col < input[row].length - 1; col++) {
        let visibility = calculateVisibility(row, col);
        if (visibility > bestVisibilityScore) {
            bestVisibilityScore = visibility;
        }
    }
}

console.log(bestVisibilityScore);