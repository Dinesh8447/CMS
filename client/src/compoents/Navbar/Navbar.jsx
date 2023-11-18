import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import logo from '../../assets/profile/man.png'
function Navbar() {
  return (
    <div>
    <div className='flex bg-black  text-white justify-between p-3'>
      <div>
      <img src={logo} className='h-6 w-6 rounded-full object-cover' alt="logo" srcset="" />
      </div>

      <div className='flex gap-5 font-bold'>
      <Link to='/'>AdminUser</Link>
      <Link to='/studentloginpage'>NormalUser</Link>
      </div>
    </div>
      <Outlet/>
    </div>

  )
}

export default Navbar
