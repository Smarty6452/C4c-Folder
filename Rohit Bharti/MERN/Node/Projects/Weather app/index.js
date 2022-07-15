const http = require('http')
const fs = require("fs")
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8")

const server = http.createServer((req, res) => {
    if(req.url == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={08fda657aec35a5ad515d518ee86c82e}')
        .on('data', function(chunk) {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
         console.log(arrData );

        })
        .on("end", function (err){
            if (err) return console.log("connection closed due to error")
           res.end();
        })

    } else {
        res.end("File Not Found");
    }
});

server.listen(8000, "127.0.0.1")