const mongoose = require('mongoose');

// Define the schema for a student record
const studentSchema = new mongoose.Schema({
  stud_id: { type: String, required: true },
  stud_name: { type: String, required: true },
  marks: {
    subject1: { type: Number, required: true },
    subject2: { type: Number, required: true },
    subject3: { type: Number, required: true },
    subject4: { type: Number, required: true },
    subject5: { type: Number, required: true }
  }
});

// Create the Student model based on the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
