import React from 'react'
import MainHeading from './MainHeading'
import {CircleStackIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'

function Activity() {
  const users = useSelector(state => state.user.user)
  return (    
    <div>

    <MainHeading title='Recent Activity' />
  <div className='mt-4 w-full border overflow-auto   h-[200px] shadow-md rounded-sm border-gray-200 bg-white'>
        <table className='table-auto overflow-hidden flex flex-col divide-x-2'>
          <thead className='px-6 py-4 bg-blue-100'>
            <tr className='text-gray-600 font-medium grid grid-cols-5'>
              <td className='col-span-2 '>Reg.No</td>
              <td className='grid justify-items-end'>Name</td>
              <td className='grid justify-items-center'>ExamFees</td>
              <td className='grid justify-items-end '>Gender</td>
            </tr>
          </thead>

          <tbody className='flex flex-col  divide-y-2'>
            {users.map(data => (
              <tr key={data._id} className='px-6 py-4 text-[#84878d]  font-bold text-sm overflow-hidden grid grid-cols-5'>
                <td className='flex items-center col-span-2 space-x-4'>
                  <div className='w-6 h-2 flex items-center'><CircleStackIcon /></div>
                  <span>{data.regno}</span>
                </td>
                <td className='grid justify-items-end '>{data.name}</td>
                <td className='grid justify-items-center'>
                  <span className={`
                     ${data.examfees === 'paid' ? 'text-green-400' : 'text-red-400'}
                     ${data.examfees == 'pending' && 'text-yellow-400'}                    
                     bg-slate-100 rounded-lg px-2 py-px text-xs capitalize`}>
                    {data.examfees}
                  </span>
                </td>
                <td className='grid justify-items-end '>{data.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            </div>
    
  )
}

export default Activity
// 