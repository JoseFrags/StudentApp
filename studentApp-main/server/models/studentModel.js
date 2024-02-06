const mongoose = require("mongoose");
const studentShema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
  grade: {
    type: String,
  },
});

const student = mongoose.model("student", studentShema);

module.exports = student;
