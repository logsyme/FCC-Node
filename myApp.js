let express = require('express');
let app = express();
const mySecret = process.eng['MESSAGE_STYLE']

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
    mySecret == "uppercase" ? res.json(data) : res.json(data)
  
})























 module.exports = app;
