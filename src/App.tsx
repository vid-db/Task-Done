

import TodoItem from "./components/TodoItem"
import { task } from "./data/todos"


function App() {


  return (
   <main className="flex justify-center items-center h-screen w-screen bg-custom-gradient">
    <div className="lg:w-2/5 sm:w-8/12 xs:w-11/12  bg-white  rounded-xl py-5">
    <h1 className="font-bold text-3xl text-center ">To-Do List</h1>

    <div className="  mx-auto  rounded-sm p-6">
        <div className="space-y-3">
            {task.map(todo => (
                <TodoItem todo={todo} />
            ))}
        </div> 
    </div>

    </div>

   </main>
  )
}

export default App
