const express = require('express');
const sql = require('../db/index')
const router = express.Router();

router.get('/', (req, res, next)=> {
    console.log('default home page');
    return res.json({
        message: "welcome to node application"
    });
});

module.exports = router;