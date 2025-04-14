// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const Student = require('./models/Student');  // Import Student model

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test the DB connection
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch((err) => {
    console.error('❌ Unable to connect to the database:', err);
  });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});