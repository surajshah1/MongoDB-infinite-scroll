// Import npm packages
const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Routes
router.get('/', (req, res) => {
    Order.find({  })
        .sort("OrderDate")
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

module.exports = router;