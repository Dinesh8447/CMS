import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './Userslice' 

const store = configureStore({
    reducer:{
        user:UserSlice
    }
})

export default store;