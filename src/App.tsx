

import { useState } from "react";
import AddToDoForm from "./components/AddTodoForm";

import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import { task } from "./data/todos";


function App() {

    const [todos, setTodos] = useState(task);
    
 
    function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodos) => 
            prevTodos.map(todo =>(todo.id === id ? {...todo, completed}: todo ))
        );
    }

    function addTodo(title: string) {
        setTodos((prevTodos) => [
            {
                id: Date.now(),
                title,
                completed: false
            },
            ...prevTodos
        ]
           
        );

    }

    function deleteTodo(id:number) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

  return (
   <main className="flex justify-center   h-screen w-screen bg-custom-gradient overflow-y-auto">
    <div className="lg:w-4/12 sm:w-3/6 xs:w-11/12 my-auto  bg-slate-50
      rounded-xl pt-7 pb-6">
    <img src="/list to do.png" alt="ToDozImage" className="w-2/5 m-auto" />
    <div className="  mx-auto  rounded-sm pt-4 pb-8 px-6">
        
    <AddToDoForm
    onSubmit={addTodo}
    />
    <TodoList 
    todos = {todos}
    onCompletedChange={setTodoCompleted}
    onDelete={deleteTodo}/>
 
    </div>
    <TodoSummary
    todos={todos}
    />

    </div>

   </main>
  )
}

export default App
