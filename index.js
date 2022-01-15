const express = require("express");
var app = express();

app.get("/", (req, res) => {
    console.log("Called /")
    res.send("Hello World")
});

app.listen(3000, () => {
    console.log("Listening to port 3000")
});