const { input } = require("./input.js");

let directories = [];
let directoryMap = {};

input.forEach(output => {
    if (output.includes("$ cd")) {
        let dir = output.slice(5);
        if (dir === "..") {
            directories.pop();
        } else {
            directories.push(dir);
            if (!Object.keys(directoryMap).includes(dir)) {
                let key = "";
                directories.forEach((folder) => {
                    key += folder + ".";
                });
                directoryMap[key] = 0;
            }
        }
    } else if (!output.includes("$")) {
        let size = output.split(" ")[0];
        if (size !== "dir") {
            let key = "";
            directories.forEach((directory) => {
                key += directory + ".";
                directoryMap[key] += parseInt(size);
            });
        }
    }
});

let totalSize = 0;
Object.keys(directoryMap).forEach((dir) => {
    if (directoryMap[dir] <= 100000) {
        totalSize += directoryMap[dir];
    }
});

console.log(totalSize);