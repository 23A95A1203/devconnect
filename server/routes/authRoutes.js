const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/authController');
const { sendResetLink, resetPassword } = require('../controllers/resetPasswordController');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

// ✅ Register route
router.post('/register', register);

// ✅ Login route
router.post('/login', login);

// ✅ Forgot Password: Send Reset Link
router.post('/forgot-password', sendResetLink);

// ✅ Reset Password using token
router.post('/reset-password/:token', resetPassword);

// ✅ Protected route: Get profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
