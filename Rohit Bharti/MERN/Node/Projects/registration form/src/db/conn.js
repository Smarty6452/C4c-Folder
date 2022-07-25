const e = require("express");
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/registrationForm", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection succesfull");
}).catch((e) => {
    console.log("connection is not successfull");
})

