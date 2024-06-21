import { task } from "./data/todos"



function App() {


  return (
   <main className="py-10 bg-red-50 h-screen">
    <h1 className="font-bold text-3xl text-center">Your To Do's</h1>

    <div className="max-w-lg  mx-auto">
        <div className="space-y-4">
            {task.map(todo => (
                <p key={todo.id} className="text-lg">
                    {todo.title}
                </p>
            ))}
        </div>
    </div>
   </main>
  )
}

export default App
