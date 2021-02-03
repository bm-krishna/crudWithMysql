const express = require('express');
// create module for hadling earch routing path.
// basically this module contains call back for each routing path.
const userController = require('../contollers/user')
const router = express.Router();
// set routings by passing routing path and callback 
router.get('/:userId', (req, res, next)=> {
    return res.json({
        message: "users are not available"
    });
});

// extract routing callback to seperate module as controller.
router.post('/createUser',userController.createUser );
router.put('/updateUser', userController.updateUser);
router.delete('/deleteUser', userController.deleteUser);

module.exports = router;