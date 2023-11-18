const express = require('express')
const router = express.Router()
const {register,login} = require('../admin/controllers')



router.post('/admin/register',register)
router.post('/admin/login',login)








module.exports=router