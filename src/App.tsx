

import TodoItem from "./components/TodoItem"
import { task } from "./data/todos"


function App() {


  return (
   <main className="flex justify-center items-center h-screen w-screen bg-custom-gradient">
    <div className="lg:w-2/5 sm:w-8/12 xs:w-11/12  bg-white  rounded-xl py-8">
    <img src="/list to do.png" alt="ToDozImage" className="w-2/5 m-auto" />
    {/* <h1 className="font-semibold text-3xl text-slate-800 text-center pt-8">To-do List</h1> */}

    <div className="  mx-auto  rounded-sm py-4 px-6">
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
