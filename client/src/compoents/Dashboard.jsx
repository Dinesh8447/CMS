import React from 'react'
import Overview from './Overview'
import Activity from './Activity'

function Dashboard() {
  return (
    <div className='grid grid-cols-1 gap-y-8 bg-[#f3f4f6] px-8 py-12'>
      <Overview/>
      <Activity/>
    </div>
  )
}

export default Dashboard
