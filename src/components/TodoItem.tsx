import { Todo } from "../type/todo";

interface TodoItemProps {
    todo: Todo;
    OncompletedChange: (id: number, completed: boolean) => void;
}
export default function TodoItem ({ todo, OncompletedChange }: TodoItemProps)  {
  return (
    <div>
        <label className="flex items-center gap-2  p-3  hover:bg-opacity-50 mx-3">
            <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={(e) => OncompletedChange(todo.id, e.target.checked )}
            className="scale-125"/>

            <span className={todo.completed ? "line-through text-gray-400" : ""}>
                {todo.title}
            </span>

        </label>
      

    </div>
  )
}

