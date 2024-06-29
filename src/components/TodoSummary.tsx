import { Todo } from "../type/todo";

interface TodoSummaryProps{
   todos: Todo[];
    // deleteAllCompleted: () => void;

}
export default function TodoSummary({
    todos,
    // deleteAllCompleted
}: TodoSummaryProps) {

    const completedTodos = todos.filter(todo => todo.completed);


    return(
        <div className="text-center font">      
            <p className="text-sm font-medium text-gray-500 ">
                {completedTodos.length}/{todos.length} todos completed
            </p>
        </div>
    );

    

}