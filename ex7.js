/* 
     Write a program that performs an HTTP GET request to a URL provided to you
     as the first command-line argument. Write the String contents of each
     "data" event from the response to a new line on the console (stdout).
*/
const http = require('http');

function HttpGet(_url) {
    http.get(_url, (res) => {
        res.setEncoding("utf8");
        let rawData = "";
        res.on("data", data => {
            rawData += data;
        })
        res.on('end', () => {
            try {
                console.log(rawData);
                const parsedData = JSON.parse(rawData);
                console.log(parsedData);
            } catch (err) {
                console.error(err);
            }
        }).on('error', (e) => {
            console.log("get Error")
        })
    })
}


HttpGet(process.argv[2]);