const express = require('express');
const router = express.Router();

router
    .route('/users')
        .get((req, res, next) => {
            res.json({users: []})
        });


module.exports = router;