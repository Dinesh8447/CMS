const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({

    name: String,
    regno: Number,
    dob: String,
    email: String,
    batch: String,
    department: String,
    gender: String,
    tutionfees: String,
    arrear: String,
    location: String,
    examfees: String,
     phone:Number,
},
    { timestamps: true }
)


module.exports = mongoose.model('StudentData', StudentSchema)
