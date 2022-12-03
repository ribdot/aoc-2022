const { input } = require("./input");

// rock, paper, scissors
const opponentOptions = ["A", "B", "C"];
const playerOptions = ["X", "Y", "Z"];
const playerChoicePoints = { X: 1, Y: 2, Z: 3}

let score = 0;
input.forEach(element => {
    score += playerChoicePoints[element[1]];
    let opponentPosition = opponentOptions.indexOf(element[0]);
    let playerPosition = playerOptions.indexOf(element[1]);

    if (opponentPosition == playerPosition) {
        score += 3;
    } else if (
        (playerPosition != 0 && playerPosition - opponentPosition == 1) ||
        (playerPosition == 0 && opponentPosition == 2)
    ) {
        score += 6;
    } else {
        score += 0;
    }
});

console.log(score);