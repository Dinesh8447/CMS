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
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateuser } from '../../redux/Userslice.jsx'
import { Alert } from 'antd';


const number =[1,2,3,4,5,6,7,8,9,10]



export default function Body({id}) {
  const users = useSelector(state=>state.user.user)
  const user = users.find(u=>u.id === id)
  console.log(user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name,setname] = useState(user.name)
  const [regno,setregno] = useState(user.regno)
  const [dob,setdob] = useState(user.dob)
  const [email,setemail] = useState(user.email)
  const [batch,setbatch] = useState(user.batch)
  const [department,setdepartment] = useState(user.department)
  const [gender,setgender] = useState(user.gender)
  const [tutionfees,settutionfees] = useState(user.tutionfees)
  const [examfees,setexamfees] = useState(user.examfees)
  const [arrear,setarrear] = useState(user.arrear)
  const [location,setlocation] = useState(user.location)
  const [phone,setphone] = useState(user.phone)
  // console.log(department)
  

const HandleUpdate = async(e) =>{
e.preventDefault()
const response =await fetch(`https://cms-omega-ten.vercel.app/update/data/${id}`,{
  method:'PUT',
  body:JSON.stringify({name,regno,dob,email,batch,department,gender,tutionfees,examfees,arrear,location,phone}),
  headers:{'Content-Type':'application/json'}
}).then(res=>{
  dispatch(updateuser({id,name,regno,dob,email,batch,department,gender,tutionfees,examfees,arrear,location,phone}))
  alert('updated')
  navigate('/showdata')
  window.location.reload()

}).catch(e=>console.log(e))
// console.log(response.data)
}



  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        {/* Title */}
        <div className="flex text-gray-400 font-semibold text-lg items-center space-x-2">
          <h1>update Student</h1>
        </div>

        <div className=" mr-10 bg-white flex flex-col rounded-xl ">
          {/* Form */}
          <form onSubmit={HandleUpdate} className='flex flex-col mb-7 scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll h-[35rem]'>
            <div className='flex py-11 ml-10 space-x-28'>
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
                  onChange={e =>setdob(e.target.value )}
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
              
              {/* location */}
              <div className={adminForm3}>
                  <h1 className={Label}>Location :</h1>
                  <input
                    required
                    placeholder="yyyy-yyyy"
                    className={Input}
                    type="text"
                    value={location}
                  onChange={e =>setlocation(e.target.value )}
                  />
                </div>

                  {/* phone */}
                <div className={adminForm3}>
                  <h1 className={Label}>Phone.No :</h1>
                  <input
                    maxLength={10}
                    required 
                    placeholder='Phone.No'
                    className={Input}
                    type="number"
                    value={phone}
                    onChange={e => setphone(e.target.value)}
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
                  onChange={e =>settutionfees(e.target.value)}
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
{/*arrear */}
                <div className={adminForm3}>
                  <h1 className={Label}>Arrear :</h1>
                  <select
                  value={arrear}
                  onChange={e =>setarrear(e.target.value )}
                  className={select}>
                    <option selected></option>
                    <option value="All Clear">AllClear</option>
                    {number.map(data=>(
                    <option value={data}>{data}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>


            <div className={adminFormButton}>
              <button className={adminFormSubmitButton} type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
