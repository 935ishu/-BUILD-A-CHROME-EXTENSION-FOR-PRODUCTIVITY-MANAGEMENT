const TimeLog = require('../models/TimeLog');
const BlockedSite = require('../models/BlockedSite');
const UserPreference = require('../models/UserPreference');

exports.logTime = async (req, res) => {
  const { userId, url, duration } = req.body;
  const log = new TimeLog({ userId, url, duration });
  await log.save();
  res.status(201).json(log);
};

exports.getReport = async (req, res) => {
  const { userId } = req.params;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const logs = await TimeLog.find({ userId, date: { $gte: today } });
  res.json(logs);
};

exports.addBlockedSite = async (req, res) => {
  const { userId, url } = req.body;
  const site = new BlockedSite({ userId, url });
  await site.save();
  res.status(201).json(site);
};

exports.getBlockedSites = async (req, res) => {
  const { userId } = req.params;
  const sites = await BlockedSite.find({ userId });
  res.json(sites);
};

exports.setPreference = async (req, res) => {
  const { userId, dailyGoalMinutes } = req.body;
  const pref = await UserPreference.findOneAndUpdate(
    { userId },
    { dailyGoalMinutes },
    { upsert: true, new: true }
  );
  res.json(pref);
};

exports.getPreference = async (req, res) => {
  const { userId } = req.params;
  const pref = await UserPreference.findOne({ userId });
  res.json(pref);
};