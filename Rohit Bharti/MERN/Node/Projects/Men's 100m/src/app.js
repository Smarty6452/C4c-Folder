const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

// we weill handle post request
app.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);
    const recordresult = await addingMensRecords.save();
    res.status(201).send(recordresult);
  } catch (e) {
    res.status(400).send(e);
  }
});
// we weill handle get request
app.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({"ranking":1});
    res.send(getMens);
  }catch(e) {
    res.status(400).send(e);
  }
});

// we will handle get request  of individual
app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMens = await MensRanking.findById({ _id });
    res.send(getMens);
  }catch(e) {
    res.status(400).send(e);
  }
});

// we will handle update request
app.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMens = await MensRanking.findByIdAndUpdate(_id, req.body, {
        new:true
    });
    res.send(getMens);
  }catch(e) {
    res.status(500).send(e);
  }
});

// we will handle delete request
app.delete("/mens/:id", async (req, res) => {
  try {
    const getMens = await MensRanking.findByIdAndDelete(req.params.id);
    res.send(getMens);
  }catch(e) {
    res.status(500).send(e);
  }
});

app.get("/", async (req, res) => {
  res.send("Hello from other side");
});

app.listen(port, () => {
  console.log(`connection is succesfull ${port}`);
});
