const { input } = require("./input.js");

const priority = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

let sum = 0;
input.forEach(sack => {
    for (let i = 0; i < sack[0].length; i++) {
        if (sack[1].includes(sack[0].charAt(i))) {
            let matching = sack[0].charAt(i);
            sum += priority.indexOf(matching) + 1;
            break;
        }
    }
});

console.log(sum);