const { input } = require("./input.js");

let overlapCount = 0;

input.forEach(pair => {
    let group1 = pair[0].split("-").map(num => parseInt(num));
    let group2 = pair[1].split("-").map(num => parseInt(num));

    if (
        (group1[0] <= group2[0] && group1[1] >= group2[0])
        || group2[0] <= group1[0] && group2[1] >= group1[0]
     ) {
        overlapCount++;
    }
});

console.log(overlapCount);