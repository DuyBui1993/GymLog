import React from "react";
import {TodoList} from "./List/TodoList";
import './todo.css'
export const Todo = (props) => {
    const [todos, setTodos] = React.useState([]);
    const [completedTodos, setCompletedTodos] = React.useState([]);
    const [text, setText] = React.useState("");
    return (
        <div className="todo-wrapper">
            <div>
                <h2>My Todos Lits</h2>
            </div>
            <div className="header-input">
            <input
                type="text"
                onChange={e => {
                    setText(e.target.value);
                }}
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        const text = e.target.value;
                        setTodos([...todos, e.target.value]);
                        e.target.value = "";
                    }
                }}
            />
            <button onClick={(e) => {
                setTodos([...todos, text]);

            }}> Add </button>
            </div>

            <div className="section">
                <p>Todos</p>
                <TodoList onItemClick={(todoIndex) => {
                    const todo = todos[todoIndex];
                    setCompletedTodos([...completedTodos, todo]);
                    setTodos(todos.filter((_, index) => index !== todoIndex));
                }} todos = {todos} />
            </div>

            <div className="section">
                <p>Completed</p>
                <TodoList onItemClick={(todoIndex) => {
                    const completedTodo = completedTodos[todoIndex];
                    setCompletedTodos(completedTodos.filter((_, index) => index !== todoIndex));
                    setTodos([...todos, completedTodo])
                }} todos = {completedTodos} />
            </div>

        </div>
    )
}

Todo.prototype = {};
Todo.defaultProps = {};