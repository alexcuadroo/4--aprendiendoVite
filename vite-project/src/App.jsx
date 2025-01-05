// src/App.jsx
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';
import './index.css';

function App() {
    const [todos, setTodos] = useState(() => {
        // Cargar las tareas desde localStorage al iniciar
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    // Actualizar localStorage cada vez que cambie el estado de las tareas
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Función para agregar una nueva tarea
    const addTodo = (todo) => {
        setTodos([...todos, { id: Date.now(), text: todo }]);
    };

    // Función para eliminar una tarea
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>ToDo App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;