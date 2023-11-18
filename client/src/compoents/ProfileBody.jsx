import React from 'react'
import { MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import exportFromJSON from 'export-from-json'
 const URL='http://localhost:4000/get/alldata'

export default function ProfileBody({ user }) {

  function download() {   
    fetch(URL)
     .then(data => data.json())
     .then((result) => { 
       const fileName = 'Student Data'
       const exportType = exportFromJSON.types.xls
       exportFromJSON({data:result,fileName,fields:['regno','name','email','dob','department','batch','location','gender','tutionfees','examfees','arrear'],exportType})
       console.log('clicked')
     })
     .catch(e => console.log(e))
}

function text() {   
  fetch(URL)
   .then(data => data.json())
   .then((result) => { 
     const fileName = 'Student Data'
     const exportType = exportFromJSON.types.txt
     exportFromJSON({data:result,fileName,fields:['regno','name','email','dob','department','batch','location','gender','tutionfees','examfees','arrear'],exportType})
     console.log('clicked')
   })
   .catch(e => console.log(e))
}

  return (
    <div className='py-8  flex justify-between items-center'>
      <div className='flex space-x-4 items-center'>
        {/* image */}

        <img src={user.ImgScr} alt={user.ImgAlt} className='rounded-full w-16 h-16 object-cover object-center' />
        {/* info */}
        <div>
          <div>
            <h1 className='text-gray-900 font-bold text-xl'>Welcome,{user.name}</h1>
          </div>
          <div className='flex items-center space-x-4'>
            <span className='h-5 w-5'><MapPinIcon /></span>
            <p className='text-sm  text-gray-600'>Collage</p>
            <div className='flex items-center space-x-2'>
              <span className={`${user.verified && 'bg-green-500 text-white'} h-5 w-5 rounded-full`}><CheckCircleIcon /></span>
              <span className='text-sm  text-gray-600' >Verified Account</span>
            </div>
          </div>
        </div>
      </div>
{/* buttons */}
      <div>
        <div className='flex space-x-4'>
          <button onClick={text} className='bg-white text-black border font-bold rounded-md px-4 py-2 text-sm hover:bg-slate-200'>Download Text</button>
          <button onClick={download} className='bg-blue-400 text-white border font-bold rounded-md px-4 py-2 text-sm hover:bg-blue-600'>Download Excel</button>
        </div>
      </div>
    </div>


  )
}
