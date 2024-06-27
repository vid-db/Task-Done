import { Todo } from "../type/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id:number,completed:boolean) => void;
   onDelete: (id: number) => void;
}

export default function TodoList ({
    todos, 
    onCompletedChange, 
    onDelete
}: TodoListProps) {


    return(
        <>
            <div className="space-y-3">
                {todos.map(todo => (
                    <TodoItem
                    key={todo.id} 
                    OncompletedChange={onCompletedChange}
                    todo={todo}
                    onDelete={onDelete} />
                ))}
            </div> 
            
            <div className="text-center text-gray-400 mr-6">
                {todos.length === 0 && (
                    <p>
                        No Todos yet. Add new one above
                    </p>
                )}
            </div>
        </>
    );

}