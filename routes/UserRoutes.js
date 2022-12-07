const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

router
    .route('/users')
        .post(async (req, res, next) => {
            let {username, email, password} = req.body;
            try {
                let user = await UserModel.create({username, email, password});
                return res
                    .status(201)
                    .json(user);
            } catch (error) {
                return res
                    .status(400)
                    .json({message: error.message});
            }
        })
        .get(async (req, res, next) => {
            let users = await UserModel.find();
            return res.json(users);
        });

router
    .route('/users/:id')
        .get(async(req, res, next) => {
            try {
                let {id} = req.params;
                let user = await UserModel.findById(id);
                return res.json(user);
            } catch (error) {
                return res
                    .status(400)
                    .json({message: error.message});
            }
        })
        .patch(async(req, res, next) => {
            try {
                let {id} = req.params;
                let user = await UserModel.findByIdAndUpdate(id, {...req.body}, {new: true});
                return res.json(user);
            } catch (error) {
                return res
                    .status(400)
                    .json({message: error.message});
            }
        })
        .delete(async(req, res, next) => {
            try {
                let {id} = req.params;
                let user = await UserModel.findByIdAndDelete(id);
                return res.status(204).json(null);
            } catch (error) {
                return res
                    .status(400)
                    .json({message: error.message});
            }
        });


module.exports = router;