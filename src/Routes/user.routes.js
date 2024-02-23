const router = require('express').Router();
const userController = require('../Controller/user.controller');

// signup
router.post("/submit",userController.submit);

module.exports = router;