import React from 'react';
import {TodoList} from "./List/TodoList";
import './todo.css';


/**
 * Primary UI component for user interaction
 */
export const Todo = (props) => {
    const [todos, setTodos] = React.useState([]);
    const [completedTodos, setCompletedTodos] = React.useState([]);
    const [text, setText] = React.useState('');
    return (


        <div className="container">
            <h2 className="todo-app"> 📋 My tasks</h2>
            <i className="fa-sharp fa-solid fa-star"></i>
            <div className="task-input">
                <input
                    type="text"
                    placeholder="Add a task"
                    value={text}
                    onChange={e => {
                        setText(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (text.trim()) {
                                setTodos([...todos, text]);
                                setText('');
                            }

                        }
                    }}
                />

                <button onClick={(e) => {
                    if (text.trim()) {
                        setTodos([...todos, text]);
                        setText('');
                    }
                }}>
                    add
                </button>
            </div>
            <div className="section">
                <p> Todos </p>
                <TodoList onItemClick={(todoIndex) => {
                    const todo = todos[todoIndex];
                    setCompletedTodos([...completedTodos, todo]);
                    setTodos(todos.filter((_, index) => index !== todoIndex));
                }} todos={todos}/>
            </div>

            <div className="section">
                <p>Completed</p>
                <div className="completed">
                    <TodoList onItemClick={(todoIndex) => {
                    setCompletedTodos(completedTodos.filter((_, index) => index !== todoIndex));
                }} todos={completedTodos}/>
                </div>
            </div>
        </div>);
};

Todo.propTypes = {};

Todo.defaultProps = {};
