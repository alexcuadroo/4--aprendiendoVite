// src/components/TodoForm.jsx
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return; // Evitar agregar tareas vacías
        addTodo(inputValue);
        setInputValue(''); // Limpiar el input
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Agregar nueva tarea"
                autoFocus
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default TodoForm;