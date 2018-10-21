const fs = require('fs');
const path = require('path');

/*
Read path to file and list file filtered by the second argument;  
*/

function ls(dir, extension) {
    fs.readdir(dir, function(err, list) {
        console.log(list);
        list.filter(file => {
            const extname = path.extname(file);
            if(extname === extension) {
                return file
            }
        }).forEach(element => {
           console.log(element) ;
        });
    });
}

ls(process.argv[2], process.argv[3]);