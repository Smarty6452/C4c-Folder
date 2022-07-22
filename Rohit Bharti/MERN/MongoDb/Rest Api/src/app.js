const express = require("express");
const router = new express.Router();
require("./db/conn");
const Student = require("./models/students");
const StudentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(StudentRouter);


// create a new router 

// we need tpo registerb our router 

// create a new stuydent

// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body)

//    user.save().then(() => {
//     res.status(201).send(user);
//    }).catch((e) => {
//     res.status(400).send(e)
//    })

// })



app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
  });
