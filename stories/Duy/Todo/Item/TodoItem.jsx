import React from 'react';

export const TodoItem = ({ onClick, children }) => {
  return <div className="todo-item" onClick={onClick}>{children}</div>
}