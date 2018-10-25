const fileFilter = require('./ex6Module');

fileFilter(process.argv[2], process.argv[3], function(err,filteredFiles) {
    filteredFiles.forEach(file, (err, file) => {
        if(err) return console.log(err);
        console.log(file);
    })
})

