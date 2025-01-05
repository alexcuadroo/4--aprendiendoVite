// src/components/TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
    return (
        <li>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
        </li>
    );
};

export default TodoItem;