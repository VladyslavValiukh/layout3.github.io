const path = require("path");
const express = require("express");
var app = express();

var port = 3000;

app.listen(port, function () {
  console.log(`Server is listening on the port ${port}`)
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, "../html/index.html"))
})

app.use('/css', express.static(path.resolve(__dirname, '../css')))
app.use('/img', express.static(path.resolve(__dirname, '../img')))
