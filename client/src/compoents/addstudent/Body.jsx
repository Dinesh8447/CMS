//AddStudent

import React, { useState } from 'react'
import {
    select, 
    adminForm2l,
    adminForm2r,
    adminForm3 ,
    Label ,
    Input ,
    adminFormSubmitButton,
    adminFormClearButton,
    adminFormButton,
} from '../../utils/styles.js'

import { adduser } from '../../redux/Userslice.jsx'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const number =[0,1,2,3,4,5,6,7,8,9,10]

export default function Body() {

  const [name,setname] = useState('')
  const [regno,setregno] = useState('')
  const [dob,setdob] = useState('')
  const [email,setemail] = useState('')
  const [batch,setbatch] = useState('')
  const [department,setdepartment] = useState('')
  const [gender,setgender] = useState('')
  const [tutionfees,settutionfees] = useState('')
  const [examfees,setexamfees] = useState('')
  const [arrear,setarrear] = useState('')
  const [location,setlocation] = useState('')

  const dispatch = useDispatch()

const handlepost = async(e) =>{
e.preventDefault()
const response =await fetch('http://localhost:4000/create/data',{
  method:'POST',
  body:JSON.stringify({name,regno,dob,email,batch,department,gender,tutionfees,examfees,arrear,location}),
  headers:{'Content-Type':'application/json'}
}).then(res=>{
  dispatch(adduser(res.data))
  alert('Added')
  window.location.reload()
  Clear()
})
}


const Clear = (e) =>{
  e.preventDefault()
    setarrear('')
    setbatch('')
    setdepartment('')
    setdob('')
    setemail('')
    setexamfees('')
    setgender('')
    setlocation('')
    setname('')
    setregno('')
    settutionfees('')
}


  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-2 text-center">
        {/* Title */}
        <div className="flex  text-gray-400  font-semibold text-lg items-center space-x-5">
          <h1>Add Student</h1>
          <Link to='/home'><button className=' hover:text-green-700'>Home</button></Link>
        </div>

        <div className=" mr-12  bg-white flex flex-col rounded-xl ">
          {/* Form */}
          <form onSubmit={handlepost} className='flex flex-col items-center mb-7 scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll h-[33rem]'>
            <div className='flex py-10 ml-10 space-x-28'>
              {/* coloum-1 */}
              <div className={adminForm2l}>
                {/* Name */}
                <div className={adminForm3}>
                  <h1 className={Label}>Name :</h1>
                  <input
                    placeholder="Full Name"
                    required
                    className={Input}
                    type="text"
                    value={name}
                    onChange={e =>setname(e.target.value )}
                  />
                </div>
                    {/* Reg.No */}
                <div className={adminForm3}>
                  <h1 className={Label}>Reg.No :</h1>

                  <input
                    placeholder="Reg.No"
                    required
                    className={Input}
                    type="number"
                    value={regno}
                    onChange={e =>setregno(e.target.value)}
                  />
                </div>

                {/* D.O.B */}
                <div className={adminForm3}>
                  <h1 className={Label}>DOB :</h1>
                  <input
                    required
                    placeholder="DD/MM/YYYY"
                    className={Input}
                    type="date"
                    value={dob}
                    onChange={e =>setdob(e.target.value)}
                  />
                </div>

                {/*  Email  */}
                <div className={adminForm3}>
                  <h1 className={Label}>Email :</h1>
                  <input
                    required
                    placeholder="Email"
                    className={Input}
                    type="email"
                    value={email}
                    onChange={e =>setemail(e.target.value )}
                  />
                </div>

                {/* Batch */}
                <div className={adminForm3}>
                  <h1 className={Label}>Batch :</h1>
                  <input
                    required
                    placeholder="yyyy-yyyy"
                    className={Input}
                    type="text"
                    value={batch}
                    onChange={e =>setbatch(e.target.value )}
                  />
                </div>



                  {/*location  */}
                  <div className={adminForm3}>
                  <h1 className={Label}>Location :</h1>
                  <input
                    required
                    placeholder="Location"
                    className={Input}
                    type="text"
                    value={location}
                    onChange={e =>setlocation(e.target.value )}
                  />
                </div>
              </div>


              {/* coloum-2 */}
              <div className={adminForm2r}>
                {/* Department */}
                <div className={adminForm3}>
                  <h1 className={Label}>Department :</h1>
                  <select
                  value={department}
                    onChange={e =>setdepartment(e.target.value )}
                  className={select}>
                    <option selected></option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option value="CS">CS</option>
                  </select>
                </div>

                {/* Gender */}
                <div className={adminForm3}>
                  <h1 className={Label}>Gender :</h1>
                  <select 
                  value={gender}
                    onChange={e =>setgender(e.target.value )}
                  className={select}>
                    <option selected></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Tution */}
                <div className={adminForm3}>
                  <h1 className={Label}>TuitionFees :</h1>
                  <select
                  value={tutionfees}
                    onChange={e =>settutionfees(e.target.value )}
                  className={select}>
                    <option selected></option>
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>

                {/* ExamFees */}
                <div className={adminForm3}>
                  <h1 className={Label}>ExamFees :</h1>
                  <select
                    value={examfees}
                    onChange={e =>setexamfees(e.target.value )}
                   className={select}>
                    <option selected></option>
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>

{/* arrear */}
                <div className={adminForm3}>
                  <h1 className={Label}>Arrear :</h1>
                  <select 
                    value={arrear}
                    onChange={e =>setarrear(e.target.value )}
                  className={select}>
                    <option selected></option>
                    <option>All Clear</option>
                    {number.map(data=>(
                    <option value={data}>{data}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className={adminFormButton}>
              <button className={adminFormSubmitButton} type="submit">
                Submit
              </button>
              <button
                onClick={Clear}
                className={adminFormClearButton}
                >
                Clear
              </button>   
            </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}
