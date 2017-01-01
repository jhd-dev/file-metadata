var express = require("express");
var path = require("path");
var multer = require("multer");

var upload = multer({ dest: './uploads' });
var port = process.env.port || 8080;

var app = express();
app.use('/upload', express.static(path.join(__dirname, 'public')));

app.post('/upload/submit', upload.single('file'), function(req, res){
    var file = req.file;
});

app.listen(port, function(){
    console.log("Listening on port " + port);
});