const express = require('express')
const router = express.Router()
const {GetAllData,GetData,CreateData,DeleteData,UpdateData} = require('../Controllers/addstudent')

//GET
router.get('/get/alldata',GetAllData)
router.get('/get/data/:id',GetData)

//POST
router.post('/create/data',CreateData)

//UPDATE
router.put('/update/data/:id',UpdateData)

//DELETE
router.delete('/delete/data/:id',DeleteData)


module.exports=router

