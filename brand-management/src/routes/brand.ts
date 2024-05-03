const express = require('express');
const router = express.Router();
const brand = require('../controllers/account');

// Create a new Item
router.get('/brand', brand.getBrand);


module.exports = router;