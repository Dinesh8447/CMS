import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: 'users',
    initialState: {
        user: []
    },
    reducers: {
        getuser: (state, action) => {
            state.user = action.payload.map(users => {
                return {
                    id: users._id,
                    name: users.name,
                    regno: users.regno,
                    dob: users.dob,
                    email: users.email,
                    batch: users.batch,
                    department: users.department,
                    gender: users.gender,
                    tutionfees: users.tutionfees,
                    examfees: users.examfees,
                    arrear: users.arrear,
                    location: users.location
                }
            })
        },
        getuserbyid: (state, action) => {
                state.user=action.payload
        },
        adduser:(state,action)=>{
            state.user.push(action.payload)
        },
        updateuser:(state,action)=>{
            const index =state.user.findIndex(x=>x.id === action.payload._id)
            state.user[index]= {
                name:action.payload.name,
                regno: action.payload.regno,
                dob: action.payload.dob,
                email:action.payload.email,
                batch: action.payload.batch,
                department:action.payload.department,
                gender: action.payload.gender,
                tutionfees:  action.payload.tutionfees,
                examfees:  action.payload.examfees,
                arrear:action.payload.arrear,
                location:action.payload.location 
            }
        },
        deleteuser:(state,action)=>{
            const id= action.payload._id
            state.user = state.user.filter(u=>u._id !== id)
        }
    },
})


export const { getuser, getuserbyid,adduser,updateuser,deleteuser} = userslice.actions;
export default userslice.reducer;