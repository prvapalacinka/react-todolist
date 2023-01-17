import logo from './logo.svg';
import React, {useState, useRef} from 'react';
import './App.css';
import TodoList from './TodoList';
const { uuid } = require('uuidv4');


function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), name: name, complete: false}]
    })
    console.log(name)
    todoNameRef.current.value = null
  }
  return (
    <>
    <TodoList todos={todos}/>
    <input ref = {todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
