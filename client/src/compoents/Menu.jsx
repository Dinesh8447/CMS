import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'

export default function Menu({ tabs }) {
    return (

<div className='px-4 flex flex-col gap-y-4 mt-4'>
{tabs.map(data => (
   <Link to={data.link} className={`${data.current === 'true' && 'bg-blue-500'} hover:bg-blue-700`}>
    <button className='px-4 py-2 flex items-center gap-x-2 rounded-sm text-white'>

        <div className='w-6 h-6'>
            {data.icon}
        </div>
        <div className=''>
            {data.name}
        </div>

    </button>
    </Link>
))}
</div>
    )
}
