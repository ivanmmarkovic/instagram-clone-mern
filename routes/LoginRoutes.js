
const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');


router
    .route('/login')
        .post(LoginController.login);


module.exports = router;