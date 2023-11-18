import React from 'react'
import Menu from '../compoents/Menu'
import logo from '../assets/school.png'
import {HomeIcon,
    TableCellsIcon,
    UserPlusIcon,
    ArrowLeftOnRectangleIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline'
const tabs = [
    {
        icon:<HomeIcon/>,
        name:'Home',
        current:'true',
        link:'/home'
    },
    {
        icon:<TableCellsIcon/>,
        name:'ShowAllStudent',
        current:'false',
        link:'/showdata'
    },
    {
        icon:<UserPlusIcon/>,
        name:'CreateStudent',
        current:'false',
        link:'/addstudent'
    },
        
    {
        icon:<UserGroupIcon/>,
        name:'About',
        current:'false',
        link:'/about'
    },
    {
        icon:<ArrowLeftOnRectangleIcon/>,
        name:'Logout',
        current:'false',
        link:'/'
    },
]




function Sidebar() {
    return (

<div className='bg-blue-400 py-10 h-full w-full overflow-hidden'>
            <img src={logo} alt="logo" className='ml-4 mb-4 w-16 h-16 rounded-full' />
            <Menu tabs={tabs}/>
        </div>
       
    )
}

export default Sidebar


