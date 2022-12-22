
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');


const createUser = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        password = await bcrypt.hash(password, 10);
        let user = await UserModel.create({ username, email, password });
        let token = jwt.sign({username: user.username, id: user._id, email: user.email}, global.jwtKey, {
            algorithm: "HS256",
            expiresIn: global.jwtExpires
        });
        // res.set("Authorization", "Bearer " + token);

        return res
            .status(201)
            .json({user, token});
    } catch (error) {
        return res
            .status(400)
            .json({ message: error.message });
    }
};


const getUsers = async (req, res, next) => {
    let users = await UserModel.find();
    return res.json(users);
};


const getUserById = async(req, res, next) => {
    try {
        let {id} = req.params;
        let user = await UserModel.findById(id);
        return res.json(user);
    } catch (error) {
        return res
            .status(400)
            .json({message: error.message});
    }
};

const patchUser = async(req, res, next) => {
    try {
        let {id} = req.params;
        let user = await UserModel.findByIdAndUpdate(id, {...req.body}, {new: true});
        return res.json(user);
    } catch (error) {
        return res
            .status(400)
            .json({message: error.message});
    }
};

const deleteUser = async(req, res, next) => {
    try {
        let {id} = req.params;
        let user = await UserModel.findByIdAndDelete(id);
        return res.status(204).json(null);
    } catch (error) {
        return res
            .status(400)
            .json({message: error.message});
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    patchUser,
    deleteUser
}