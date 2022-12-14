const { monkies } = require("./input.js");

const rounds = 20;
for (let i = 0; i < rounds; i++) {
    monkies.forEach(monkey => {
        var operations = monkey.operation.split(" ");
        monkey.items.forEach(itemWorry => {
            monkey.inspectCount++;
            let piece1 = operations[0] == "old" ? itemWorry : parseInt(operations[0]);
            let piece2 = operations[2] == "old" ? itemWorry : parseInt(operations[2]);
            
            let newWorry = 0;
            switch (operations[1]) {
                case "+": newWorry = piece1 + piece2; 
                    break;
                case "*": newWorry = piece1 * piece2; 
                    break;
            }
            newWorry = Math.floor(newWorry / 3.0);
    
            if (newWorry % monkey.divisibleTest == 0) {
                monkies[monkey.throwToTrue].items.push(newWorry);
            } else {
                monkies[monkey.throwToFalse].items.push(newWorry);
            }
        });
        monkey.items = [];
    });
}

let counts = monkies.map((monkey) => monkey.inspectCount);
counts.sort((a, b) => b - a);
console.log(counts);
console.log(counts[0] * counts[1]);