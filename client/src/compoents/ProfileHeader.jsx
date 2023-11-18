import React from 'react'
import { MagnifyingGlassIcon,BellIcon,ChevronDownIcon } from '@heroicons/react/24/outline'


function ProfileHeader({user}) {
    return (
        <div className='flex justify-between text-gray-400 '>
            {/* search icon */}
            <div className='flex gap-x-2 items-center'>
                <div className='w-5 h-5'><MagnifyingGlassIcon/></div>
                <div>
                  <input type="text" placeholder='Search Student' className='outline-none'/>
                </div>
            </div>

            {/* Notify icon and user */}
            <div className='flex gap-x-2 items-center'>
                <div>
                <BellIcon className='w-5 h-5'/>
                </div>
                <div className='flex items-center gap-x-2'>
                    <img src={user.ImgScr} alt={user.ImgAlt} className='rounded-full w-10 h-10 object-cover object-center'/>
                    <span className='flex items-center space-x-2'>
                        {user.name}
                        <span className='w-5 h-5'><ChevronDownIcon/></span>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default ProfileHeader
