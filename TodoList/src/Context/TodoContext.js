import { createContext , useContext } from "react";

export  const TodoContext = createContext({
    todos:[
        {
            id :4,
            todo : "todo masg",
            Completed : true ,
        }
    ],

    addTodo : (todo) => {},
    updateTodo : (todo,id)=>{},
    deleteTodo : (id) => {},
    toggleComplete : (id) =>{}
    


});

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider