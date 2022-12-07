const { input } = require("./input.js");

let index = null;
for (let i = 0; i < input.length; i++) {
    let string = input.slice(i, i + 14);
    if (! /(.).*\1/.test(string)) {
        index = i + 14;
        break;
    }
}

console.log(index);