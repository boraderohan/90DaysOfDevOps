const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

//  Add this try/catch block here
try {
  mongoose.connect('mongodb://mongo:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(' Connected to MongoDB');
} catch (err) {
  console.error(' MongoDB connection error:', err);
  process.exit(1); // Exit if connection fails
}

// Simple route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;