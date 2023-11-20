import {Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './compoents/Home'
import ShowAllData from './compoents/ShowAllData'
import About from './compoents/About/About'
import ProfileCard from './compoents/ProfileCard'
import Addstudent from './compoents/addstudent/Addstudent'
import Loginpage from './compoents/loginpage/Login'
import Register from './reference/register'
import UpdateStudent from './compoents/UpdateStudent/UpdateStudent'
import ShowAllData_Student from './compoents/StudentPage/ShowAllData_Student'
import ProfileCard_Student from './compoents/StudentPage/ProfileCard_Student'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getuser } from './redux/Userslice'
import Ref from './reference/Ref'
function App() {


  const dispatch = useDispatch()
  useEffect(() => {
    const fetchapi = async () => {
      await fetch('https://cms-omega-ten.vercel.app/get/alldata')
        .then(data => data.json())
        .then((result) => { dispatch(getuser(result)) })
        .catch(e => console.log(e))
    }
    fetchapi()
  }, [])
 
  return (
  <Routes>
    <Route path='/showdata/students' element={<ShowAllData_Student/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<Loginpage/>}/>
    <Route path='/updatestudent/:id' element={<UpdateStudent/>}/>
    <Route path='/showdata' element={<ShowAllData/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profilecard/:id' element={<ProfileCard/>}/>
    <Route path='/addstudent' element={<Addstudent/>} />
    <Route path='/profilecard/student/:id' element={<ProfileCard_Student/>}/>
    <Route path='/register' element={<Register />} />
    {/* //refer */}
    <Route path='/ref' element={<Ref/>}/>

  </Routes>

  )
}

export default App
