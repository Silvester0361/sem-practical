const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const studentRoutes = require('./routes/routestud');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/studentDB', { 
    
}).then(() => {
        console.log('Connected to MongoDB');
      }).catch((error) => {
        console.log('Failed to connect to MongoDB', error);
      });
    

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use the student routes
app.use('/api', studentRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
