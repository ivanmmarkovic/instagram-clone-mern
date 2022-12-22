
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/User');

const login = async (req, res, next) => {
    try {
        let {email, password} = req.body;
        let user = await UserModel.findOne({email});
        if(user == null){
            return res.status(404).json({message: `User with ${email} not found`});
        }
        let matches = await bcrypt.compare(password, user.password);
        if(!matches){
            return res
            .status(400)
            .json({message: 'Wrong password'});
        }
        
        let token = jwt.sign({username: user.username, id: user._id, email: user.email}, global.jwtKey, {
            algorithm: "HS256",
            expiresIn: global.jwtExpires
        });
        // res.set("Authorization", "Bearer " + token);
        return res.status(200).json({token});
    } catch (error) {
        return res
            .status(400)
            .json({ message: error.message });
    }
};


module.exports = {
    login
};