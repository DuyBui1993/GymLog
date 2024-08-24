import React, {useState} from "react";
import './todo.css';

export const Todo = (props) => {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = React.useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        setTodos([...todos, {text: newTodo}]);
        setNewTodo('');
    };

    return (<div className="todo">
        <h1>Todo App</h1>
        <div className="header-input">
            <input
                className='input-text'
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"

                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addTodo()
                    }
                }}
            />
            <button className='input-btn' onClick={addTodo}> Add</button>
        </div>

        <div className="todo-list">
            <p>Todos</p>
            {todos.map((itemTodo, indexTodo) => (
                <div className="todo-item"
                     onClick={() => {
                         setCompletedTodos([...completedTodos, itemTodo]);
                         setTodos(todos.filter((_, index) => index !== indexTodo));
                     }}
                >
                    {itemTodo.text}
                </div>))}
        </div>

        <div className="completed-list">
            <p>Completed</p>
            {completedTodos.map((itemCompleted, indexCompleted) => (
                <div className="completed-item"
                     onClick={() => {
                         setCompletedTodos(completedTodos.filter((_, index) => index !== indexCompleted));
                     }}
                >
                    {itemCompleted.text}

                </div>))}
        </div>

    </div>);
};

Todo.propTypes = {};

Todo.defaultProps = {};