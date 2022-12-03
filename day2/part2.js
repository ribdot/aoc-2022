const { input } = require("./input");

// rock, paper, scissors
const options = ["A", "B", "C"];
const playerChoicePoints = { A: 1, B: 2, C: 3}

let score = 0;
input.forEach(element => {
    let opponentPosition = options.indexOf(element[0]);
    let playerPosition = opponentPosition;
    switch (element[1]) {
        case "X":   // loss
            score += 0;
            playerPosition = playerPosition == 0 ? playerPosition = 2 : playerPosition -= 1;
            break;
        case "Y":   // draw
            score += 3;
            break;
        case "Z":   // won
            score += 6;
            playerPosition = playerPosition == 2 ? playerPosition = 0 : playerPosition += 1;
            break;
    }
    score += playerChoicePoints[options[playerPosition]];
});

console.log(score);