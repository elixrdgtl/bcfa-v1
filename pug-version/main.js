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
app.get("/programs", (req,res)=>{
    res.render("pages/programs");
})
app.get("/programs/primary", (req,res)=>{
    res.render("pages/programs/primary");
})
app.get("/programs/kinder", (req,res)=>{
    res.render("pages/programs/kinder");
})
app.get("/programs/junior", (req,res)=>{
    res.render("pages/programs/junior");
})
app.get("/about", (req,res)=>{
    res.render("pages/about");
})
app.get("/contact", (req,res)=>{
    res.render("pages/contact");
})

app.listen(port, () => {
    console.log(`Server started listening at ${port}`)
})