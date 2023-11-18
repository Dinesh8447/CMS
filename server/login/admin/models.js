const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    username:String,
    password:String,
    role:{
        type:String,
        default:'student'
    }
})

module.exports = mongoose.model('AdminAuth',userschema)

