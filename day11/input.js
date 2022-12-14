const path = require("path");
const fs = require("fs");

const args = process.argv.slice(2);
var inputFile = "input.txt";
if (args.length) {
    inputFile = args[0];
}

const input = fs.readFileSync(path.resolve(__dirname, inputFile), "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return "0";
    }

    return data;
}).toString().split("\n");

var monkies = [];
var monkey = {};
input.forEach((row) => {
    if (row.includes("Monkey")) {
        monkey.number = parseInt(row.split(" ")[1].trim(":"));
    } else if (row.includes("Starting items:")) {
        let items = row.split(": ")[1].split(",");
        monkey.items = items.map((item) => parseInt(item.trim()));
    } else if (row.includes("Operation:")) {
        monkey.operation = row.split("=")[1].trim();
    } else if (row.includes("Test:")) {
        monkey.divisibleTest = parseInt(row.split(" ").at(-1));
    } else if (row.includes("true:")) {
        monkey.throwToTrue = parseInt(row.split(" ").at(-1));
    } else if (row.includes("false:")) {
        monkey.throwToFalse = parseInt(row.split(" ").at(-1));
    } else {    // blank line
        monkey.inspectCount = 0;
        monkies.push(monkey);
        monkey = {};
    }
});

module.exports ={
    monkies
};