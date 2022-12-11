const { input } = require("./input.js");

const commandDuration = {
    'noop': 1,
    'addx': 2,
}
const desiredCycles = [20, 60, 100, 140, 180, 220];
const screenSize = 240;
const pixelsPerRow = 40;

let desiredCyclesMap = {};
desiredCycles.forEach(key => {
    desiredCyclesMap[key] = 0;
});

let x = 1;
let inputKey = 0;
let command = input[inputKey];
let exeStart = 0;
let cycle = 0;
let output = "";
for(cycle = 1; cycle < screenSize + 1; cycle++) {
    if (desiredCycles.includes(cycle)) {
        desiredCyclesMap[cycle] = x;
    }

    let spritePixels = [x - 1, x, x + 1];
    if (spritePixels.includes((cycle - 1) % pixelsPerRow)) {
        output += "#";
    } else {
        output += ".";
    }

    if (command) {
        if (cycle >= exeStart + commandDuration[command[0]]) {
            if (command[0] == 'addx') {
                x += command[1];
            }

            command = input[++inputKey];
            exeStart = cycle;
        }
    }
}

let outputArray = output.match(/.{1,40}/g);
console.log(outputArray);