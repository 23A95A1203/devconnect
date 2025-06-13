const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  resetToken: String,
  expireToken: Date, // ✅ Make sure it's named exactly like this
});

module.exports = mongoose.model('User', userSchema);
