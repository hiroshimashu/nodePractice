// @params { directory of name } dir
// @params { file extension } ext
// @params { callback } callback

const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {
    // Read directory's file
    let filtered;
    fs.readdir(dir, function(err, files) {
        if(err) return callback(err);
        try {
           fileterd = files.filter(file => {
            const extname = path.extname(file);
            if(extname === ext) {
                return file
            } 
           })
        } catch(err) {
            callback(err);
        }
        
        callback(null, filtered);
    });
}