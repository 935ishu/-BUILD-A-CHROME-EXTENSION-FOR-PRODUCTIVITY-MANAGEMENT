const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
  userId: String,
  dailyGoalMinutes: Number
});

module.exports = mongoose.model('UserPreference', preferenceSchema);