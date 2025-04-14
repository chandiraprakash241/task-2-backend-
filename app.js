const express = require('express');
const studentRoutes = require('./routes/studentRoutes'); // Import routes

const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Use the /students prefix for student routes
app.use('/student', studentRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
