const { input } = require("./input.js");

const totalDiskSpace = 70000000;
const requiredFreeSpace = 30000000;

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

let currentUsedSpace = directoryMap["/."];
let currentFreeSpace = totalDiskSpace - currentUsedSpace;

let smallestDirSize = totalDiskSpace;
Object.keys(directoryMap).forEach((dir) => {
    if (currentFreeSpace + directoryMap[dir] > requiredFreeSpace) {
        if (directoryMap[dir] < smallestDirSize) {
            smallestDirSize = directoryMap[dir];
        }
    }
});

console.log(smallestDirSize);