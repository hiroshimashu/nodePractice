function spiderLinks(currentUrl, body, nesting, callback) {
    if (nesting === 0) {
        return process.nextTick(callback);
    }
    const links = utilities.getPageLinks(currentUrl, body);
    function iterate(index) {
        if (index === links.length) {
            return callback();
        }
        spider(links[index], nesting - 1, err => {
            if (err) {
                return callback(err);
            }
            iterate(index + 1);
        });
    }
    iterate(0);
}


function spider(url, callback) {
    const filename = utilities.urlToFilename(url);
    fs.exists(filename, exists => {
        if (exists) {
            return callback(null, filename, false);
        }
        download(url, filename, err => {
            if (err) {
                return callback(err);
            }
            callback(null, filename, true);
        });
    });
}

function saveFile(filename,contents, callback) {
    mkdirp(path.dirname(filename), err => {
        if(err) {
            return callback(err);
        }
        fs.writeFile(filename, contents, callback);
    });
}

function download(url, filename, callback) {
    console.log('downloading ${url}');
    request(url, (err, response, body) => {
        if (err) {
            return callback(err);
        }
        saveFile(filename, body, err => {
            if(err) {
                return callback(err);
            }
            console.log(`Downloading and saved: ${ url }`);
            callback(null, body);
        })
    })
}

