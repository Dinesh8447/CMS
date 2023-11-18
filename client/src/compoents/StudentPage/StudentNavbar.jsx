import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import logo from '../../assets/profile/man.png'
function StudentNavbar() {
  return (
    <div>
    <div className='flex bg-black  text-white justify-between p-3'>
      <div>
      <img src={logo} className='h-6 w-6 rounded-full object-cover' alt="logo" srcset="" />
      </div>

      <div className='flex gap-5 font-bold'>
      <Link to='/about'>About</Link>
      <Link to='/'>Logout</Link>
      </div>
    </div>
      <Outlet/>
    </div>

  )
}

export default StudentNavbar;
