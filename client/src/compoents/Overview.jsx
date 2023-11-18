import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import MainHeading from './MainHeading'
import { useSelector, } from 'react-redux';



function Overview() {

  const users = useSelector(state => state.user.user)
  return (
    <div>
      {/* overview heading */}
      <MainHeading title='Overview'/>
      {/* overview */}
      <div className='lg:flex lg:space-x-8 mt-4 sm:grid sm:gap-y-4 '>
        {/* 1grid */}
          <div className='grid grid-cols-1 border-gray-200 rounded-lg bg-white w-[360px] shadow-md '>
            
            <div className='flex items-center space-x-4 py-4'>
              <div className='text-gray-400 w-14 h-14 px-4 flex items-center'><UserCircleIcon /></div>

              <div className='flex flex-col'>
                <div className=' text-gray-900 font-bold'>{users.length}</div>
                <div className='text-gray-400 font-bold'>Total Student</div>
              </div>
            </div>
            <Link to='/showdata' className='text-blue-700 bg-blue-200 flex items-start pl-4 py-2'>
            <button>view all</button>
            </Link>
          </div>
          {/* 2grid */}
          {/* <div className='grid grid-cols-1 border-gray-200 rounded-lg bg-white w-[360px] shadow-md '>
            
            <div className='flex items-center space-x-4 py-4'>
              <div className='text-gray-400 w-14 h-14 px-4 flex items-center'><UserCircleIcon /></div>

              <div className='flex flex-col'>
                  <div className=' text-gray-900 font-bold'>to</div>                  
                <div className='text-gray-400 font-bold'>Total Student</div>
              </div>
            </div>
            <Link to='/showdata' className='text-blue-700 bg-blue-200 flex items-start pl-4 py-2'>
            <button>view all</button>
            </Link>
          </div> */}
        
      </div>
    </div>
  )
}

export default Overview
