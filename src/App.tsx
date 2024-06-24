

import { useState } from "react";
import AddToDoForm from "./components/AddTodoForm";
import TodoItem from "./components/TodoItem";
import { task } from "./data/todos";


function App() {

    const [todos, setTodos] = useState(task);
 
    function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodos) => 
            prevTodos.map(todo =>(todo.id === id ? {...todo, completed}: todo ))
        );
    }

  return (
   <main className="flex justify-center items-center h-screen w-screen bg-custom-gradient">
    <div className="lg:w-2/5 sm:w-8/12 xs:w-11/12 bg-slate-50
      rounded-xl py-8">
    <img src="/list to do.png" alt="ToDozImage" className="w-2/5 m-auto" />
    {/* <h1 className="font-semibold text-3xl text-slate-800 text-center pt-8">To-do List</h1> */}

    <div className="  mx-auto  rounded-sm py-4 px-6">
        
    <AddToDoForm/>
        <div className="space-y-3">
            {todos.map(todo => (
                <TodoItem
                key={todo.id} 
                OncompletedChange={setTodoCompleted}
                todo={todo} />
            ))}
        </div> 
    </div>

    </div>

   </main>
  )
}

export default App
