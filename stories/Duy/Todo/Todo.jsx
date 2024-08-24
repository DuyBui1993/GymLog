import React from 'react';
import {TodoList} from "./List/TodoList";
import './todo.css';

/**
 * Primary UI component for user interaction
 */
export const Todo = (props) => {
  const [todos, setTodos] = React.useState([]);
  const [completedTodos, setCompletedTodos] = React.useState([]);
  return (
    <div className="todo-wrapper">
      <input
        type="text"
        onKeyDown={(e ) => {
          if (e.key === "Enter") {
            const text = e.target.value;
            setTodos([...todos, e.target.value]);
            e.target.value = "";
          }
        }}
      />

      <div className="section">
        <p>Todos</p>
        <TodoList onItemClick={(todoIndex) => {
          const todo = todos[todoIndex];
          setCompletedTodos([...completedTodos, todo]);
          setTodos(todos.filter((_, index) => index !== todoIndex));
        }} todos={todos} />
      </div>

      <div className="section">
        <p>Completed</p>
        <TodoList onItemClick={(todoIndex) => {
          setCompletedTodos(completedTodos.filter((_, index) => index !== todoIndex));
        }} todos={completedTodos} />
      </div>


    </div>
  );
};

Todo.propTypes = {};

Todo.defaultProps = {};
