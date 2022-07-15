const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const port = process.env.PORT || 3030;

const pug = require("pug");
const compiled = pug.compileFile("index.pug");

app.set("views", "");
app.set("view engine", "pug");

const publicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(publicDirectoryPath))

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Server started listening at ${port}`)
})