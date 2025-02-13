import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import './App.css'
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { insert,mydelete,editdata,completed, Incompleted } from "./TodoSlice";

function App() {
 
  let[input,setinput]=useState("")
  let[Idstore,setIdStore]=useState("");
  let[editbtn,setEditBtn]=useState(false);

  const dispatch =useDispatch();
  const sendDataValue= useSelector((state)=>state.mytodo.todolist)
 


 

  console.log(sendDataValue)
  const NormaleditPage=(id,data)=>{
    console.log(id,data)
    setIdStore(id);
    setinput(data);
    setEditBtn(!editbtn)
}

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
          {
            editbtn?(<button onClick={()=>{dispatch(editdata({data:input,id:Idstore})),setEditBtn(false)}}> Edit</button>):
            (<button onClick={()=>{dispatch(insert({status:true,task:input,id:Date.now()}))}}> Add</button>)
          }
        </div>
      </div>
      <div className="display">
         {
          sendDataValue.map((e,index)=>{return(
                    <div className="task"  key={index}>
                    <div className="option">



                      {
                        e.status?(<div  type="checkbox" name="myCheckbox"style={{width: "20px",height: "20px",cursor: "pointer", backgroundColor:"white", display:"flex",justifyContent:"center", alignItems:"center"}} onClick={()=>{dispatch(completed({id:e.id}))}} ><AiOutlineClose /></div>):
                        (<div  type="checkbox" name="myCheckbox"style={{width: "20px", height: "20px",background:"white", cursor:"pointer" ,display:"flex",justifyContent:"center", alignItems:"center"}} onClick={()=>{dispatch( Incompleted({id:e.id}))}} ><AiOutlineCheck /></div>)
                      }


                   {
                    e.status?(<p>{e.task}</p>):(<p style={{textDecoration:'line-through', color:"red"}}>{e.task}</p>)
                   }

              </div>
              <div className="button">
                    <MdDeleteOutline onClick={()=>{dispatch(mydelete({id:e.id}))}}/>
                    <MdOutlineEdit   onClick={()=>{NormaleditPage(e.id,e.task)}} />
                  

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
