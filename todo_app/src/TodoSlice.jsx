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
        }
    }
})

export const {insert} =TodoSlice.actions
export default TodoSlice.reducer;