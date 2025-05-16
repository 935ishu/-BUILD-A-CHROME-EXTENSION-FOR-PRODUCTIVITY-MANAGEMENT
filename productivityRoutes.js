const express = require('express');
const router = express.Router();
const controller = require('../controllers/productivityController');

router.post('/log', controller.logTime);
router.get('/report/:userId', controller.getReport);
router.post('/block', controller.addBlockedSite);
router.get('/block/:userId', controller.getBlockedSites);
router.post('/preference', controller.setPreference);
router.get('/preference/:userId', controller.getPreference);

module.exports = router;