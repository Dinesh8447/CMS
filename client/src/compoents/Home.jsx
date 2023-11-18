import React from 'react'
import Slidebar from '../compoents/Sidebar'
import ProfileWrapper from '../compoents/ProfileWrapper'
import Dashboard from '../compoents/Dashboard'
function Home() {
    return (
        
        <div className='flex items-center justify-center mx-auto  lg:max-w-7xl border border-gray-200 
    rounded-md overflow-hidden mt-5'>
            <div className='grid grid-cols-4 w-full '>
                <Slidebar />
                <div className='col-span-3'>
                        <ProfileWrapper />
                        <Dashboard />
                </div>
            </div>
        </div>
        
    )
}

export default Home
