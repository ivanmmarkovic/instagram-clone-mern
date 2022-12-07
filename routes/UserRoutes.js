const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

router
    .route('/users')
        .post(async (req, res, next) => {
            let {username, email, password} = req.body;
            let user = await UserModel.create({username, email, password});
            return res.json(user);
        })
        .get((req, res, next) => {
            res.json({users: []})
        });


module.exports = router;