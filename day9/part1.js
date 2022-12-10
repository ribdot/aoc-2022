const { input } = require("./input.js");

function distanceTo(fromPos, toPos) {
    return [
        fromPos[0] - toPos[0],
        fromPos[1] - toPos[1]
    ];
}

let tailTouches = [];

let headPos = [0, 0];
let tailPos = [0, 0];
let headPosPrev = [0, 0];
tailTouches.push(tailPos.join(","));
input.forEach(motion => {
    let dir = motion[0];
    let steps = motion[1];

    for (let i=0; i<steps; i++) {
        switch (dir) {
            case 'R':
                headPos[1] += 1;
                break;

            case 'L':
                headPos[1] -= 1;
                break;
                
            case 'U': 
                headPos[0] -= 1;
                break;

            case 'D':
                headPos[0] += 1;
        }

        let distance = distanceTo(headPos, tailPos);
        if (Math.abs(distance[0]) >= 2 || Math.abs(distance[1]) >= 2) {
            tailPos[0] = headPosPrev[0];
            tailPos[1] = headPosPrev[1];
            let tailCoords = tailPos.join(",");
            if (!tailTouches.includes(tailCoords)) {
                tailTouches.push(tailCoords);
            }
        }
        
        headPosPrev[0] = headPos[0];
        headPosPrev[1] = headPos[1];
    }
});

console.log(tailTouches.length);
