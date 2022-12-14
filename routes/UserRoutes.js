const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

const auth = require('../middlewares/Auth');

router
    .route('/users')
        .post(UserController.createUser)
        .get(auth, UserController.getUsers);

router
    .route('/users/:id')
        .get(UserController.getUserById)
        .patch(UserController.patchUser)
        .delete(UserController.deleteUser);


module.exports = router;