import { Todo } from "../type/todo";

interface TodoItemProps {
    todo: Todo;
}
export default function TodoItem ({ todo }: TodoItemProps)  {
  return (
    <div>
        <label className="">
        <input type="checkbox" />

        </label>
      

    </div>
  )
}

