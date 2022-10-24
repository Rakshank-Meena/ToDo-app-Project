import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import DoneIcon from '@mui/icons-material/Done';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { REMOVE_TODO,DONE_TODO,CLEAR_ALL } from "../context/action.types";
import TaskIcon from '@mui/icons-material/Task';
import ClearAllIcon from '@mui/icons-material/ClearAll';

const Sub=()=>{
    const { todo,dispatch }=useContext(TodoContext)
    
    
    
    return(
    <>
    <div className="subtasks">
        <header className="subtask-header"><div>your tasks</div>
        <TaskIcon fontSize="medium" style={{marginTop:"0.5vh"}}/>
        <div className="clearall"  onClick={()=>(dispatch({type:CLEAR_ALL}))}><ClearAllIcon fontSize="medium" /></div>
        </header>

        {todo.map((val)=>{return(
            <>
            <ul className="listflex" >
                <ul key={val.id} style={val.styl}>{val.tk}</ul> 
                <div className="buttons">
                    <DoneIcon   onClick={()=>{return (
                        val.styl={textDecoration:"line-through",color:"rgba(29, 29, 20, 0.636)",textDecorationColor:"black"}
                        ,dispatch({type:DONE_TODO,payload:val})
                        )}} 
                    />
                    <DeleteOutlineRoundedIcon  onClick={()=>(dispatch({type:REMOVE_TODO,payload:val.id}))}/>
                </div>
            </ul>
            </>)})}


    </div>
    </>
)}
export default Sub;