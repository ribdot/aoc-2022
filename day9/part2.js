const { input } = require("./input.js");

function printRopeDebug() {
    let start = [15, 12]
    let array = Array(26).fill().map(() => Array(26).fill('.'));
    rope.forEach((knot, key) => {
        let row = knot.position[0] + start[0];
        let col = knot.position[1] + start[1];

        if (array[row][col] == ".") {
            array[row][col] = key;
        }
    });
    
    array.forEach(line => {
        console.log(line.join(""));
    });
}

class Knot {
    constructor(position) {
        this.position = [ position[0], position[1] ];
        this.previousPosition = [ position[0], position[1] ];
    }

    distanceTo(toPos) {
        return [
            this.position[0] - toPos.position[0],
            this.position[1] - toPos.position[1]
        ];
    }

    syncPreviousPosition() {
        this.previousPosition[0] = this.position[0];
        this.previousPosition[1] = this.position[1];
    }

    toString() {
        return this.position.join(",");
    }

    updatePosition(pos) {
        this.position[0] = pos[0];
        this.position[1] = pos[1];
    }
}

let tailTouches = [];
let rope = [];
for (let i = 0; i < 10; i++) {
    rope.push(new Knot([0, 0]));
}

tailTouches.push(rope[0].toString());
input.forEach(motion => {
    let dir = motion[0];
    let steps = motion[1];

    for (let i=0; i<steps; i++) {
        switch (dir) {
            case 'R':
                rope[0].position[1] += 1;
                break;

            case 'L':
                rope[0].position[1] -= 1;
                break;
                
            case 'U': 
                rope[0].position[0] -= 1;
                break;

            case 'D':
                rope[0].position[0] += 1;
        }

        for (let j=0; j<rope.length - 1; j++) {
            let distance = rope[j].distanceTo(rope[j+1]);
            if (Math.abs(distance[0]) >= 2 || Math.abs(distance[1]) >= 2) {
                rope[j + 1].updatePosition([
                    rope[j + 1].position[0] += 1 * Math.sign(distance[0]),
                    rope[j + 1].position[1] += 1 * Math.sign(distance[1])
                ]);
            }
            
            rope[j].syncPreviousPosition();
        }

        let tailCoords = rope[rope.length - 1].toString();
        if (!tailTouches.includes(tailCoords)) {
            tailTouches.push(tailCoords);
        }
    }
});

console.log(tailTouches.length);
