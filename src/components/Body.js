import { useState,useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import TodoContext from '../context/TodoContext';
import { ADD_TODO } from '../context/action.types';
import { v4 } from 'uuid';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';

const Body = ()=>{
 const[tk,setTk]=useState("")
 const { dispatch }=useContext(TodoContext)



 const change=(val)=>{return setTk(val.target.value)}
 const add=()=>{
     const list={tk,id:v4(),styl:{textDecoration:"none"}}
    switch (tk) {
        case "":return alert("please enter a task")
 
    default:dispatch({type:ADD_TODO,payload:list});
    setTk("")
        
 }}




return(
    <>
    <div className="events">
        <div><EventNoteTwoToneIcon fontSize='large'/></div>
        <div className="events-header">Add a new task</div>
        <div>
            <input type="text" value={tk} onChange={change} ></input>
            <button className='buttonadd' onClick={add}><AddIcon/></button>
        </div>
    
    </div>
    </>
)
}

export default Body;