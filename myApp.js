let express = require('express');
let app = express();

console.log("Hello World")

app.get("/", function(req, res) {
    res.send('Hello Express', __dirname);
})


app.get("/", function(req, res) {
    absolutePath = __dirname + "/view"
    res.sendFile()
})





























 module.exports = app;
