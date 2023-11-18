//modules import 
const express = require('express')
const app = express()
const cors = require('cors')
const BodyParser = require('body-parser')
const cookiParser  = require('cookie-parser')
const route = require('./Routers/addstudent')
const AuthRoute = require('./login/admin/routes') 
const mongoose = require('mongoose')
require('dotenv').config()

//middleware
app.use(BodyParser.json())
app.use(cors({
    origin:['http://localhost:5173','https://CMS.app.onrender.com'],
    credentials:true
}))
app.use(cookiParser())
app.use(route)
app.use(AuthRoute)



//mongodb connection
mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log('connected')
})
.catch(e=>console.log(e))

//server listening.....
app.listen(4000,()=>{
    console.log('running......')
})