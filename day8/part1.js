const { input } = require("./input.js");

function addToVisibleCoords(row, col) {
    let coords = row + "-" + col;
    if (!visibleCoords.includes(coords)) {
        visibleCoords.push(coords);
    }
}

function checkDirectionVisibility(direction, row, col) {
    switch (direction) {
        case 'top':
            for (let i = row - 1; i >= 0; i--) {
                if (input[row][col] <= input[i][col]) {
                    return false;
                }
            }
            break;

        case 'bottom':
            for (let i = row + 1; i < input.length; i++) {
                if (input[row][col] <= input[i][col]) {
                    return false;
                }
            }
            break;

        case 'left':
            for (let i = col - 1; i >= 0; i--) {
                if (input[row][col] <= input[row][i]) {
                    return false;
                }
            }
            break;

        case 'right':
            for (let i = col + 1; i < input[row].length; i++) {
                if (input[row][col] <= input[row][i]) {
                    return false;
                }
            }
            break;

        default:
            console.log('ERROR! Invalid direction: ' + direction);
    }
    
    return true;
}


let visibleCoords = [];

for (let row = 1; row < input.length - 1; row++) {
    for (let col = 1; col < input[row].length - 1; col++) {
        if (
            checkDirectionVisibility('top', row, col)
            || checkDirectionVisibility('bottom', row, col)
            || checkDirectionVisibility('left', row, col)
            || checkDirectionVisibility('right', row, col)
        ) {
            addToVisibleCoords(row, col);
            continue ;
        }
    }
}

let outerTreeVisibleCount = (input.length * 2) + (input[0].length * 2) - 4
console.log(outerTreeVisibleCount + visibleCoords.length);