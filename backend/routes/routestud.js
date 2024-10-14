const express = require('express');
const router = express.Router();
const Student = require('../models/modelstud');

// Create a new student record
router.post('/students', async (req, res) => {
  const studentData = req.body;

  const student = new Student({
    stud_id: studentData.stud_id,
    stud_name: studentData.stud_name,
    marks: {
      subject1: studentData.marks.subject1,
      subject2: studentData.marks.subject2,
      subject3: studentData.marks.subject3,
      subject4: studentData.marks.subject4,
      subject5: studentData.marks.subject5
    }
  });

  try {
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all student records
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific student by ID
router.get('/students', async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Update a student record
router.put('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a student record
router.delete('/students/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
