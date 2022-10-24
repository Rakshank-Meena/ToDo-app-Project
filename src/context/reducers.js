
import { ADD_TODO,REMOVE_TODO,DONE_TODO,CLEAR_ALL } from "./action.types";

export const todoReducer = (state,action)=>{

    
    switch (action.type) {
        case ADD_TODO:
            return [action.payload,...state ]
        case REMOVE_TODO:
            return state.filter((todo)=>{return todo.id !== action.payload})
        case DONE_TODO:
            return [...state]
        case CLEAR_ALL:
             return []
            
        default:
             return state
            }
    }