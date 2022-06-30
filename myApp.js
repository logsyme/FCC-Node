let express = require('express');
let bodyParser = require('body-parser');
let app = express();

console.log("Hello World");

app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/", function(req, res) {
   // res.send('Hello Express');
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));


app.get("/json", function(req, res) {
    process.env['MESSAGE_STYLE'] == "uppercase" ? data={"message": "HELLO JSON"} : data={"message": "Hello json"};
    res.json(data);
});


app.get("/now", function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res) {
    data = {"time": req.time};
    res.json(data);
});


app.get("/:word/echo", function(req, res, next){
    data = {"echo": req.params.word};
    res.json(data);
});

app.route("/name").get(function(req, res, next){
    data = {"name": req.query.first + " " + req.query.last}
    res.json(data)
}).post(function(req, res, next){
    data = {"name": req.body.first + " " + req.body.last}
    res.json(data)
})















 module.exports = app;
