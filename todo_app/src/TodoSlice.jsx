import { createSlice } from '@reduxjs/toolkit'

const TodoSlice=createSlice({
    name:"todo",
    initialState:{
        todolist:[]
    },
    reducers:{
        insert:(state,actions)=>{
            console.log(actions.payload)
            state.todolist.push(actions.payload)
        },
        mydelete:(state,actions)=>{
            console.log(actions.payload)
            state.todolist=state.todolist.filter(e=>console.log(e.id==actions.payload))
           
        }
    }
})

export const {insert,mydelete} =TodoSlice.actions
export default TodoSlice.reducer;