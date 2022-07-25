
const express = require("express");
const path = require("path")
const app = express();
const hbs = require('hbs')
require("./db/conn")


const port = process.env.PORT || 5000;

const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
app.use(express.static(staticPath))

// console.log(path.join(__dirname, "../public"));
hbs.registerPartials(partialsPath)
app.set("view engine", "hbs");
app.set("views", templatePath)



app.get("/", (req, res) => {
    res.render("index")
});

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})