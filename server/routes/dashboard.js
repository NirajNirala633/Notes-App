const express = require("express");
const router = express.Router();
const dashboardController = require('../controllers/dashboardController.js');

// Dashboard Routes

router.get('/dashboard', dashboardController.dasboard)




module.exports = router;