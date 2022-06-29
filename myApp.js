let express = require('express');
let app = express();

console.log("Hello World")

app.get("/", function(req, res) {
   // res.send('Hello Express');
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
})

app.use("/public", express.static(__dirname + "/public"))

app.get("/json", function(req, res) {
    data = {
        "message": "Hello json"
    }
    process.env['MESSAGE_STYLE'] == "uppercase" ? res.json(data.toUpperCase()) : res.json(data)
})
























 module.exports = app;
