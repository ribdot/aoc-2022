const { input } = require("./input");

let totals = [];
let sum = 0;
input.forEach(calories => {
    if (isNaN(calories)) {
        totals.push(sum);
        sum = 0;
    } else {
        sum += calories;
    }
});
totals.push(sum);

totals = totals.sort((a, b) => {return b - a });
console.log(totals[0]);