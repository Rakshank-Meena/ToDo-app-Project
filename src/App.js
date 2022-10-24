import { useReducer } from 'react';
import './App.css';
import { todoReducer } from './context/reducers';
import TodoContext from './context/TodoContext';
import Body from './components/Body';
import Sub from './components/List';
import Navbar from './components/Navbar';


const App = ()=> {
  const [todo,dispatch]=useReducer(todoReducer,[]);
  return (
    <>
      <TodoContext.Provider  value={{todo,dispatch}}>
        <Navbar/>
        <div className='main'>
        <Body />
        <Sub />
        </div>
      </TodoContext.Provider>
    
    </>
  );
}

export default App;
