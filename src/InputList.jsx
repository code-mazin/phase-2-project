import { InputItem } from "./InputItem"

export function InputList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "Please Insert Your first Item..."}
      {todos.map(todo => {
        return (
          <InputItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}