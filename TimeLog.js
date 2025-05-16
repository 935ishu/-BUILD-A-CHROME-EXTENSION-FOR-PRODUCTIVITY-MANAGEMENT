const mongoose = require('mongoose');

const timeLogSchema = new mongoose.Schema({
  userId: String,
  url: String,
  duration: Number, // in seconds
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TimeLog', timeLogSchema);