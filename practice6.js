// Web spider version3

function spiderLinks(currentURL, body, nesting , callback) {
    if (nesting === 0) {
        return process.nextTick(callback);
    }
    const links = utilities.getPageLinks(currentURL, body);
    if (links.length === 0) {
        return process.nextTick(callback);
    }
    let completed = 0, hasErrors = false;

    function done() {
        if (err) {
            hasErrors = true;
            return callback(err);
        }
        if (++completed === links.length && !hasErrors) {
            return callback();
        }
    }
    links.forEach(link => {
        spider(link, nesting - 1, done);
    })
}