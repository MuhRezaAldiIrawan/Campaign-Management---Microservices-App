const express = require('express');
const router = express.Router();
const redemlogs = require('../controllers/redemlogsControllers');

router.post('/redem', redemlogs.postRedem);

module.exports = router;