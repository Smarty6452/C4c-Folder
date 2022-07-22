const express = require("express")
require("../src/db/conn")
const MensRanking = require("../src/models/mens")
const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

// we weill handle post request  
app.post("/mens", async (req, res) => {
    try {
        const addingMensRecords =  new MensRanking(req.body)
        console.log(req.body);
       const recordresult =  await addingMensRecords.save();
       res.send(recordresult)
    } catch(e) {
        res.send(e)

    }
})



app.get("/", async(req, res) => {
    res.send("Hello from other side")
})

app.listen(port, () => {
    console.log(`connection is succesfull ${port}`);
})