const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


router
    .route('/users')
        .post(UserController.createUser)
        .get(UserController.getUsers);

router
    .route('/users/:id')
        .get(UserController.getUserById)
        .patch(UserController.patchUser)
        .delete(UserController.deleteUser);


module.exports = router;