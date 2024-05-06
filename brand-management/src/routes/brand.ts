const express = require('express');
const router = express.Router();
const brand = require('../controllers/account');

// Create a new 
router.get('/brand', brand.getBrand);


module.exports = router;