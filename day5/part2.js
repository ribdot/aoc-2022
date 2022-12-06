const { input } = require("./input.js");

let stackInput = [];
let moveInput = [];

let hasFoundBlankLine = false;
input.forEach(line => {
    if (line == "") {
        hasFoundBlankLine = true;
    } else if (!hasFoundBlankLine) {
        stackInput.push(line.match(/.{1,4}/g));
    } else if (hasFoundBlankLine) {
        moveInput.push(line.match(/\d+/g).map(num => parseInt(num)));
    }
});

let stacks = [];
stackInput.reverse().forEach((row, key) => {
    if (key == 0) {
        row.forEach(num => {
            stacks.push([]);
        });
    } else {
        for(let i=0; i< row.length; i++) {
            let crate = row[i].trim();
            if (crate !== '') {
                stacks[i].push(crate);
            }
        }
    }
});

moveInput.forEach(move => {
    let stack = [];
    for(let i = 0; i < move[0]; i++) {
        let crate = stacks[move[1] - 1].pop();
        stack.unshift(crate);
    }
    stacks[move[2] - 1] = stacks[move[2] - 1].concat(stack);
});

let tops = "";
stacks.forEach(stack => {
    tops += stack.pop().charAt(1);
});

console.log(tops);