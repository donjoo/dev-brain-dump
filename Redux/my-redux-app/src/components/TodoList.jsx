import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoAdd, todoDelete, todoToggle, todoUpdate } from '../app/actions';

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todos);
    const [newTodo, setNewTodo] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            dispatch(todoAdd(newTodo.trim()));
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(todoDelete(id));
    };

    const handleToggleTodo = (id) => {
        dispatch(todoToggle(id));
    };

    const handleStartEdit = (id, text) => {
        setEditingId(id);
        setEditText(text);
    };

    const handleSaveEdit = (id) => {
        if (editText.trim()) {
            dispatch(todoUpdate(id, editText.trim()));
        }
        setEditingId(null);
        setEditText('');
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditText('');
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px' }}>
            <h2>Todo List</h2>
            
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Add a new todo..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    style={{ width: '70%', padding: '8px' }}
                />
                <button type="submit" style={{ marginLeft: '10px', padding: '8px 16px' }}>
                    Add Todo
                </button>
            </form>

            <div style={{ marginTop: '20px' }}>
                <h3>Todos ({todos.length})</h3>
                {todos.length === 0 ? (
                    <p>No todos yet. Add one above!</p>
                ) : (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {todos.map(todo => (
                            <li key={todo.id} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                padding: '10px', 
                                border: '1px solid #eee', 
                                margin: '5px 0',
                                borderRadius: '4px',
                                backgroundColor: todo.completed ? '#f0f0f0' : 'white'
                            }}>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleTodo(todo.id)}
                                    style={{ marginRight: '10px' }}
                                />
                                
                                {editingId === todo.id ? (
                                    <div style={{ display: 'flex', flex: 1 }}>
                                        <input
                                            type="text"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            style={{ flex: 1, padding: '4px' }}
                                            autoFocus
                                        />
                                        <button onClick={() => handleSaveEdit(todo.id)} style={{ margin: '0 5px', padding: '4px 8px' }}>
                                            Save
                                        </button>
                                        <button onClick={handleCancelEdit} style={{ padding: '4px 8px' }}>
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <span style={{ 
                                            flex: 1, 
                                            textDecoration: todo.completed ? 'line-through' : 'none',
                                            color: todo.completed ? '#666' : 'black'
                                        }}>
                                            {todo.text}
                                        </span>
                                        <button 
                                            onClick={() => handleStartEdit(todo.id, todo.text)}
                                            style={{ margin: '0 5px', padding: '4px 8px' }}
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDeleteTodo(todo.id)}
                                            style={{ 
                                                backgroundColor: '#ff4444', 
                                                color: 'white', 
                                                padding: '4px 8px' 
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TodoList;

