const express = require("express");
const path = require("path")
const app = express();
const port = 5000;

//built in middleware
// console.log(path.join(__dirname, '../public'));

const Path = path.join(__dirname, '../public')
app.use(express.static(Path))

app.get('/', (req, res) => {
    res.send("hello from express server")
});

app.listen(port, () => {
    console.log(`listening to port no ${port}`);
})