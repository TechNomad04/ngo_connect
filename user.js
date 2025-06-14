const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    email: {
        type: string,
        required: true,
        unique: true
    },
    username: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    }
})

module.exports = mongoose.model('User', userschema)