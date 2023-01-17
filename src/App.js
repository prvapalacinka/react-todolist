import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import TodoList from './TodoList';
const { uuid } = require('uuidv4');

const local_storage_key = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(local_storage_key))
    if (storedTodos) setTodos(storedTodos)
}, [])

  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(todos))
  }, [todos])

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
