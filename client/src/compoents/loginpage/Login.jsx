import React, { useState } from 'react'
// import Register from './register';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const[username,setusername] = useState('')
    const[password,setpassword] = useState('')
    
    const navigate = useNavigate()
    axios.defaults.withCredentials=true
    const handlesubmit = (e) =>{
        e.preventDefault()
        axios.post('https://cms-omega-ten.vercel.app/admin/login',{username,password})
        .then(res=>{
          if(res.data.status === 'ok'){
            if(res.data.role === 'admin'){
              navigate('/home')
            }else if (res.data.role === 'student'){
              navigate('/showdata/students')
            }
          }else{
            alert('login faild')
            navigate('/')
          }
            console.log(res.data)
        })
    }
    return (
      <div className='flex h-screen w-full'>
  
         <div className='w-full flex lg:w-1/2 bg-slate-100 items-center justify-center'>
              <form action="" onSubmit={handlesubmit} className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-50'>
                  <h1 className='text-5xl font-semibold'>login</h1>
                  <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details.</p>
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
                           type="password" 
                           onChange={e=>setpassword(e.target.value)}
                             value={password}
                           />
                      </div>

                       
                      
                  </div>
                  <button className='mt-8 w-full text-white hover:scale-[1.01] ease-in-out bg-blue-400 active:scale-[.98] active:duration-75 transition-all py-2 rounded-md font-semibold '>
                      Register
                  </button>
                  
              </form>
         </div>
               
         <div className='bg-gray-200 w-1/2 items-center justify-center hidden lg:flex h-full'>
         <div className='w-60 h-60 bg-gradient-to-tr from-blue-500 to-purple-600 animate-bounce rounded-full'/>
         <div className='w-1/2 h-1/2 bg-blue/10 backdrop-blur-lg  bottom-0 absolute'/>
         </div>
        
      </div>
    );
  }
  

