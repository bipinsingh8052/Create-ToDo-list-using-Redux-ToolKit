import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import './App.css'
import { GiNotebook } from "react-icons/gi";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { insert } from "./TodoSlice";

function App() {
 
  let[input,setinput]=useState("")


  const dispatch =useDispatch();
  const sendDataValue= useSelector((state)=>state.mytodo.todolist)
 


 

  // console.log(sendDataValue)
  const myedit=(id)=>[
    console.log(id)
  ]

  // console.log(index,'indexno: deleted')


  return (
    <>
    <div className="container">
      <div className="input">
        <h1>
          To-Do List <span><GiNotebook />
          </span>
        </h1>
        <div className="main_input">
          <input type="text"  value={input} onChange={(e)=>{setinput(e.target.value)}} />
          <button onClick={()=>{dispatch(insert(input))}}> Add</button>
        </div>
      </div>
      <div className="display">
         {
          sendDataValue.map((e,index)=>{return(
                    <div className="task"  key={index}>
                    <div className="option">
                      <input  type="checkbox" name="myCheckbox"style={{
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                      accentColor: "red"}} />
                  <p> {e}</p>
              </div>
              <div className="button">
                    <MdDeleteOutline onClick={()=>{myedit(index)}} />
                    <MdOutlineEdit />
                  

              </div>
          </div>
          )})
         }

      </div>
    
    </div>
     
    </>
  )
}

export default App
