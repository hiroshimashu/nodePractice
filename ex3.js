const fs = require('fs');

const bufferFile = fs.readFileSync(process.argv[2]);
const strBuffer = bufferFile.toString();
const strBufferArray = strBuffer.split("\n");
let numNewLines = 0;
strBufferArray.forEach(e => {
    numNewLines += 1;
})
return numNewLines;