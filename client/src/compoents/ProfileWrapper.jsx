import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileBody from './ProfileBody'
import profile from '../assets/profile/man.png'

const user =
  {
    name:'Admin',
    ImgScr:profile,
    ImgAlt:'profile',
    residency:'Dunk Street',
    verified:'yes'
  }


function ProfileWrapper() {
  return (
    <div className='bg-white divide-y-2 divide-gray-100 px-8 py-8 border-b border-gray-200 drop-shadow-sm'>
      <ProfileHeader user={user}/>
      <ProfileBody user={user}/>
    </div>
  )
}

export default ProfileWrapper
