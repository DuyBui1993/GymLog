import React from 'react';
import {TodoItem} from "../Item/TodoItem";


export const TodoList = ({  todos, onItemClick }) => {
  return <div className="todo-list">
    {todos.map((todo, index) => {
      return <TodoItem onClick={() => onItemClick(index)} key={index}>{todo}</TodoItem>;
    })}
  </div>
}