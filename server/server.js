const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const passwordRoutes = require('./routes/passwordRoutes');
app.use('/api/password', passwordRoutes);

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware: Add JSON parser BEFORE routes
app.use(cors());
app.use(express.json()); // ⬅️ this must come BEFORE routes

// ✅ Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  console.log("📩 [GET] /");
  res.send('Welcome to DevConnect API!');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
});
