import { useEffect, useState } from 'react'
import { TodoProvider } from "./Context"

import './App.css'

function App() {
  const [Todos, SetTodo] = useState([])

  const addTodo = (todo) => {

    SetTodo((prev) => [{ id: Date.now(), ...todo }, ...prev])

  }
  const updateTodo = (todo, id) => {

    SetTodo((prev) => prev.map((prevtodo) => prevtodo.id === id ? todo : prevtodo))

    // prev.map((eachVal)=>{
    //   if(eachVal.id === id){
    //     todo
    //   }
    //   else {
    //     eachVal
    //   }

    // })
  }
  const deleteTodo = () => {
    SetTodo((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {

    SetTodo(
      (prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, Completed: !prevTodo.Completed } : prevTodo)
    )

  }

  useEffect(() => {

    const todos = JSON.parse(localStorage.getItem("todos"))
    console.log(todos);

    if (todos && todos.length > 0) {
      SetTodo(todos)

    }

  },[])
  useEffect(()=>{

    localStorage.setItem("todos",JSON.stringify(Todos))
    
  },[Todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
