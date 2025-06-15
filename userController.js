const User = require('./user')
const bcrypt = require('bcrypt');
require('dotenv').config()

const register = async (req, res) => {
    try{
        const {email, username, password} = req.body;
        const userE = await User.findOne({email: email})
        if(userE)
            return res.status(409).json({ status: false, message: "Email already exists" })
        const userU = await User.findOne({username: username})
        if(userU)
            return res.status(409).json({ status: false, message: "Username already exists" })
        const grained = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, grained);
        const user = new User({email, username, password: hashedPassword});
        await user.save();
        return res.status(201).json({status:true, message: "user created successfully"})
    } catch(err){
        console.log(err);
        return res.status(500).json({status: false, message: "Internal server error"})
    }
}

const login = async (req, res) => {
    try{
        const {email, username, password} = req.body;

        const user = await User.findOne({email})
        if(!user)
            return res.status(400).json({status: false, message: "User not found"})
        
        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch)
            return res.status(401).json({status: false, message: "Invalid credentials"})

        return res.status(200).json({status: true, message: "User found"})

    } catch(err) {
        console.log(err)
        return res.status(500).json({status: false, message: "Internal server error"})
    }
}

module.exports = {
    register, 
    login
}