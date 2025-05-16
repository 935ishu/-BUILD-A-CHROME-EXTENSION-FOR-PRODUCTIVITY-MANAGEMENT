const mongoose = require('mongoose');

const blockedSiteSchema = new mongoose.Schema({
  userId: String,
  url: String
});

module.exports = mongoose.model('BlockedSite', blockedSiteSchema);