// import Student from '../models/students';

const express = require('express')
const router = new express.Router();
const Student = require("../models/students")

router.post("/students", async (req, res) => {
    try {
      const user = new Student(req.body);
  
      const createUser = await user.save();
      res.status(201).send(createUser);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  // update data 
  router.patch("/students/:id", async (req, res) => {
    try {
      const user = req.parqams.id;
  
      const updateStudents = await Student.findIdAndUpdate(_id, req.body ); 
      res.send(updateStudents);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  
  
  //read the data of register students
  router.get("/students", async (req, res) => {
      try {
        const studenstData = await Student.find();
        res.status(201).send(studenstData)
      } catch(e) {
          res.status(400).send(e);
      }
  })
  
  //delete the students by id
  router.delete("/students/:id", async(req, res) => {
    try{
       
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id) {
          return res.status(400).send()
        }
        res.send(deleteStudent)
    } catch(e) {
      res.status(500).send(e)
    }
  })
module.exports = router