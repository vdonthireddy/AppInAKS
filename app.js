
const express = require('express');
var app = express();


app.get("/", (req, res) => {
    res.send("Hello AKS!!!");
});

app.listen(80, '0.0.0.0');