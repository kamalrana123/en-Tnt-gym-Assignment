import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    gymAppoinments:[{
        id:nanoid(),
        firstName:"kamal",
        lastName:"Rana",
        location:"India",
        appoinments:[
            {
                id:nanoid(),
                date:"",
                time:""
            }
        ]
    }]
}
export const gymAppoinmentsSlice = createSlice({
    name:"gymAppoinments",
    initialState,
    reducers:{
        addGymAppoinments:(state,action)=>{
            const appoinments ={
                id:nanoid(),
                firstName:action.payload.firstName,
                lastName:action.payload.lastName,
                location:action.payload.location,
                appoinments:action.payload.appoinments,
            }
            state.gymAppoinments.push(appoinments)
            localStorage.setItem("gym",JSON.stringify(state.gymAppoinments))
            console.log(appoinments)
        },
        deleteGymAppoinments:(state,action)=>{
            state.gymAppoinments = state.gymAppoinments.filter((item)=>item.id!==action.payload)
            console.log(state.gymAppoinments)
            localStorage.setItem("gym",JSON.stringify(state.gymAppoinments))
        },
        updateGymAppoinments:(state, action)=>{
            console.log(action.payload)
            state.gymAppoinments = state.gymAppoinments.map((item)=>item.id === action.payload.id?action.payload:item)
            console.log(state.gymAppoinments)
            localStorage.setItem("gym",JSON.stringify(state.gymAppoinments))
        },
        setGymAppoinments:(state,action)=>{
            const data=JSON.parse(localStorage.getItem("gym"))
            if(data){
                state.gymAppoinments = data
            }
        },
    }
})

export const {addGymAppoinments,deleteGymAppoinments, updateGymAppoinments,setGymAppoinments} = gymAppoinmentsSlice.actions

export default  gymAppoinmentsSlice.reducer