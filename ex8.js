/* 
     Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
*/ 

const http = require('http');
const req = http.request(process.argv[2], (err,res) => {
    let requested = "";
    res.setEncoding('utf8');

    if (err) return err;
    try { 
      res.on('data', (err, chunk) => {
        if (err) return err;
        requested += chunk;
      }) 
      
      res.on('end', res => {
         return JSON.parse(res);
      })
    } catch {
      return console.log("something is wrong");
    }
})

console.log(req);

