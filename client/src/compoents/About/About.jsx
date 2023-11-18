import React from 'react'
import img from '../../assets/profile/batman.jpg'
import man from '../../assets/profile/man.png'
import pdf from '../../assets/details.pdf'

export default function About() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 flex flex-col  items-center'>
      <div className='h-[20rem] w-[38rem] gap-3 bg-gradient-to-bl from-purple-300 via-blue-700 to-purple-600  rounded-2xl mt-4 flex flex-row items-center justify-between'>
              <div>
                <div className=" flex-row ">
            
              <p className='font-semibold text-teal-50 text-center mb-5'>This project was created by  MCA student <span>SD</span>
               <span className='text-sm' >(rockey)</span></p>
                </div>
                <a className='flex items-center justify-center ' href={pdf} download='project-details'>
                  <button className='bg-red-400 p-1  font-bold rounded-md'>download</button>
                  </a>
              </div>              

              <div className="h-full mr-2 flex items-center justify-center">
              <img src={img} className='h-64 w-[16rem]  rounded-lg object-cover' />
              </div>
      </div>
    </div>
  )
}
