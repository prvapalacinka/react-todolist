import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState(['Todo1', 'Todo2'])
  return (
    <>
    <TodoList todos={todos}/>
    <input type="text"/>
    <button>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
