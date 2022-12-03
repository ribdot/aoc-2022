const { input } = require("./input.js");

const priority = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

let sum = 0;
containerGroups:
for (let i = 0; i < input.length; i += 3) {
    for (let j = 0; j < input[i].length; j++) {
        if (
            input[i + 1].includes(input[i].charAt(j))
            && input[i + 2].includes(input[i].charAt(j))
        ) {
            let badge = input[i].charAt(j);
            sum += priority.indexOf(badge) + 1;
            continue containerGroups;
        }
    }
}

console.log(sum);