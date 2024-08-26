import { X } from "lucide-react";
import { Todo } from "../type/todo";

type TodoItemProps = {
    todo: Todo;
    OncompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}
export default function TodoItem({ todo, OncompletedChange, onDelete }: TodoItemProps) {
    return (
        <div className="flex items-center gap-5 xs:mx-1 sm:mx-8">
            <label className="flex grow items-center gap-5  py-3  hover:bg-opacity-50">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => OncompletedChange(todo.id, e.target.checked)}
                    className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:bg-blue-600 peer-checked:border-blue-600">

                    <svg className="w-5 h-5 text-white peer-checked:block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5.5 11l2.5 2.5L14 8"></path>
                    </svg>
                </div>
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>

            </label>

            <button className="mr-6" onClick={() => onDelete(todo.id)}>
                <X size={20} className="text-gray-400 " />
            </button>
        </div>
    )
}

