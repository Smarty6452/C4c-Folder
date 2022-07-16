const express = require('express')
const path = require('path')
const app = express();
const port = process.env.PORT ||  9000 ;

//public static path
// console.log(path.join(__dirname, "../public"))
const static_path = path.join(__dirname, "../public")
app.use(express.static(static_path))

//routing
app.get("" ,(req, res)=> {
    res.send("welcome to my homepage")
}) 

app.get("/about" ,(req, res)=> {
    res.send("welcome to About us page")
}) 

app.get("/weather" ,(req, res)=> {
    res.send("welcome to weather page")
}) 
app.get("*" ,(req, res)=> {
    res.send("404 erro page")
}) 

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})