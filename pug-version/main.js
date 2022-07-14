const app = require("express")();
const port = 3030;
const pug = require("pug");
const compiled = pug.compileFile("index.pug");

app.set("views","");
app.set("view engine","pug");

app.get("/",(req,res) => {
  res.render("index");
})

app.listen(port,() => {
  console.log(`Server started listening at ${port}`)
})