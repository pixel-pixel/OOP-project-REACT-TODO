import React from 'react'
import "./todo-list.css"

import TodoItem from "../todo-item/todo-item"

export default function TodoList({todos, onDeleted, onToggleDone, onToggleImportant}) {
  todos = todos.map(item => {
    const {id, ...attributes} = item
    return (
      <li key={id} className="list-group-item">
        <TodoItem
          {...attributes}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  })

  return (
    <ul className="todo-list list-group">
      {todos}
    </ul>
  )
}