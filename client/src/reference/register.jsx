import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
    const[username,setusername] = useState('')
    const[password,setpassword] = useState('')
    const[role,setrole] = useState('')
    const handlesubmit = async (e) =>{
        e.preventDefault()
        axios.post('https://cms-omega-ten.vercel.app/admin/register',{username,password,role})
        .then(res=>{
            alert('register')
            // console.log(res)
        })
    }
    return (    
      <div className='flex h-screen w-full'>
  
         <div className='w-full flex lg:w-1/2 bg-slate-100 items-center justify-center'>
              <form action="" onSubmit={handlesubmit} className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-50'>
                  <h1 className='text-5xl font-semibold'>CreateUser</h1>
                  <p className='font-medium text-lg text-gray-500 mt-4'>Please enter user details.</p>
                  <div className='mt-8'>
                      <div>
                          <label className='text-lg font-medium' htmlFor="">UserName</label>
                          <input
                           className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Enter Your UserName'
                             type="text"
                             onChange={e=>setusername(e.target.value)}
                             value={username}
                             />
                      </div>
  
                      <div>
                          <label className='text-lg font-medium' htmlFor="">Password</label>
                          <input 
                          className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' 
                          placeholder='Enter Your Password'
                           type="text" 
                           onChange={e=>setpassword(e.target.value)}
                             value={password}
                           />
                      </div>

                       <div>
                          <label className='text-lg font-medium' htmlFor="">Role</label>
                          <select
                          className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' 
                          placeholder='SelectUser'
                          onChange={e=>setrole(e.target.value)}
                          value={role}>
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                  </select>
                      </div>

                      
                  </div>
                  <button className='mt-8 w-full text-white hover:scale-[1.01] ease-in-out bg-blue-400 active:scale-[.98] active:duration-75 transition-all py-2 rounded-md font-semibold '>Register</button>
              <Link to='/home'>
                        <button className='mt-8 w-full text-white hover:scale-[1.01] ease-in-out bg-blue-400 active:scale-[.98] active:duration-75 transition-all py-2 rounded-md font-semibold '>
                            Back
                        </button>
                    </Link>
              </form>
         </div>
         <div className='bg-gray-200 w-1/2 items-center justify-center hidden lg:flex h-full'>
         <div className='w-60 h-60 bg-gradient-to-tr from-blue-500 to-green-600 animate-bounce rounded-full'/>
         <div className='w-1/2 h-1/2 bg-blue/10 backdrop-blur-lg  bottom-0 absolute'/>
         </div>
      </div>
  )
}
