const express = require("express");
const cors = require("cors"); // Import the cors middleware
const ConnectDB = require("./database/connexionDB");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const student = require("./models/studentModel");

// Use cors middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
ConnectDB();

app.post("/api/addStudent", async (req, res) => {
  try {
    const newSudent = new student(req.body);
    await newSudent.save();
    res.status(200).send("Student added successfully !");
  } catch (error) {
    res.send(400);
  }
});

app.post("/api/deleteStudent", async (req, res) => {
  try {
    const result = await student.findByIdAndDelete(req.body._id);
    res.status(200).send("Student deleted successfully !");
  } catch (error) {
    res.send(400);
  }
});

app.post("/api/updateStudent", async (req, res) => {
  try {
    const filter = { _id: req.body.id };
    const update = req.body.item;
    const result = await student.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).send("Student updated successfully !");
  } catch (error) {
    res.send(400);
  }
});

// Route to get all students
app.get("/api/getAllStudents", async (req, res) => {
  try {
    const allStudents = await student.find();
    res.json(allStudents);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
