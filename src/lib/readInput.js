// https://www.tutorialkart.com/nodejs/read-a-file-in-nodejs-using-fs-module/
const fs = require('fs');

function readInput(filename) {
  return fs.readFileSync(filename).toString();
}
module.exports = readInput;
