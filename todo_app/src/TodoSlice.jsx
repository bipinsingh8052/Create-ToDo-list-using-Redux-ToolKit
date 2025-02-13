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
        editdata:(state,actions)=>{
            console.log(actions.payload)
            for(let i=0;i<state.todolist.length;i++){
                if(state.todolist[i].id==actions.payload.id){
                    state.todolist[i].task=actions.payload.data;
                }
            }
        },
        mydelete:(state,actions)=>{
            console.log(actions.payload)
            state.todolist =  state.todolist.filter( key=>key.id !== actions.payload.id)
           
        },

        completed:(state,actions)=>{
            console.log(actions.payload)
            for(let i=0;i<state.todolist.length;i++){
                if(state.todolist[i].id==actions.payload.id){
                    state.todolist[i].status=false;
                }
            }
        },
        Incompleted:(state,actions)=>{
            console.log(actions.payload)
            for(let i=0;i<state.todolist.length;i++){
                if(state.todolist[i].id==actions.payload.id){
                    state.todolist[i].status=true;
                }
            }
        }
        
    }
})

export const {insert,mydelete,editdata,completed, Incompleted} =TodoSlice.actions
export default TodoSlice.reducer;