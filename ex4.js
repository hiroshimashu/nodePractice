const fs = require('fs');

function countBlank(file) {
    let numberOfLines = 0;
    fs.readFile(file, (err, bf) => {
        const strBuffer = bf.toString();
        const strBufferArray = strBuffer.split("\n");
        strBufferArray.forEach(element => {
            numberOfLines += 1;
        });
        return numberOfLines - 1;
    })
}

countBlank(process.argv[2]);