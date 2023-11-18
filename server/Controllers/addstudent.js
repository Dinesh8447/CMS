// import models
const database = require('../models/addstudent')

//GET - ALL DATA
const GetAllData = async (req, res) => {
        try {
               const response = await database.find()
               res.json(response)
        } catch (error) {
                res.status(400).json(error)
        }
}

//GET - DATA BY ID
const GetData =async (req, res) => {
        const {id} = req.params
        try {
                const response =  await database.findById(id)
                res.json(response)
        } catch (error) {
                res.status(400).json(error)
        }
}


//POST - CREATE DATA
const CreateData = async(req, res) => {
        
        const {name,
                regno,
                dob,
                email,
                batch,
                department,
                gender,
                tutionfees,
                examfees,
                arrear,
                location
        } = req.body
        const response = await database.create({name,regno,dob,email,batch,department,gender,tutionfees,examfees,arrear,location})
        response.save()
        .then(item=>{
                res.json(item)
        })
        .catch(err=>{
                res.json(err)
        })
}


//PUT - UPDATE DATA BY ID
const UpdateData = async(req, res) => {
        const {id} = req.params
     try{
        const {name,
                regno,
                dob,
                email,
                batch,
                department,
                gender,
                tutionfees,
                examfees,
                location,
                arrear} = req.body
        await database.findByIdAndUpdate(id,{name,
                regno,
                dob,
                email,
                batch,
                department,
                gender,
                tutionfees,
                examfees,
                arrear,
                location
        },{new:true})
                .then(data=>{
                        res.json({message:"updated",data:data})
                })
                .catch(err=>res.json(err))
        }catch(err){
                res.status(400).json(err)
        }
        

}


//DELETE - DELETE DATA BY ID
const DeleteData = async (req, res) => {
        const {id} = req.params
        try {
               await database.findByIdAndDelete(id)
                .then(data=>{
                        res.json({msg:'delete',data:data})
                })
                .catch(err=>{
                        res.json(err)
                })
        } catch (error) {
                res.status(400).json(error)
        }
}



module.exports = { GetData,GetAllData,DeleteData,UpdateData,CreateData }