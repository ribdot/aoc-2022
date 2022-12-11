const { input } = require("./input.js");

const commandDuration = {
    'noop': 1,
    'addx': 2,
}
const desiredCycles = [20, 60, 100, 140, 180, 220];
let desiredCyclesMap = {};
desiredCycles.forEach(key => {
    desiredCyclesMap[key] = 0;
});

let x = 1;
let inputKey = 0;
let command = input[inputKey];
let exeStart = 0;
let cycle = 0;
for(cycle = 1; cycle < desiredCycles[desiredCycles.length - 1] + 1; cycle++) {
    if (desiredCycles.includes(cycle)) {
        desiredCyclesMap[cycle] = x;
    }

    if (!command) {
        break;
    } else {
        if (cycle >= exeStart + commandDuration[command[0]]) {
            if (command[0] == 'addx') {
                x += command[1];
            }

            command = input[++inputKey];
            exeStart = cycle;
        }
    }
}

let sum = 0;
Object.keys(desiredCyclesMap).forEach(key => {
    sum += desiredCyclesMap[key] * key;
});

console.log(sum);