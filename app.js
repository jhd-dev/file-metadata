var express = require("express");
var path = require("path");
var multer = require("multer");

var upload = multer({
    dest: path.join(__dirname, 'temp')
});
var port = process.env.PORT || 8080;

var app = express();
app.use('/upload', express.static(path.join(__dirname, 'public')));

app.post('/submit', [upload.single('file'), function(req, res){
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
        size: req.file.size
    }));
}]);

app.listen(port, function(){
    console.log("Listening on port " + port);
});