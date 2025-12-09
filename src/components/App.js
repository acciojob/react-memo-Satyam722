import React, { useState, useEffect } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';
import './styles.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');
  const [error, setError] = useState('');

  // Initialize with some todos
  useEffect(() => {
    setTodos(['Task 1', 'Task 2', 'Task 3']);
  }, []);

  // Add default todo
  const addDefaultTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  // Increment counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Handle custom task input
  const handleCustomTaskChange = (e) => {
    const value = e.target.value;
    setCustomTask(value);
    if (value.length > 0 && value.length <= 5) {
      setError('Task must be more than 5 characters');
    } else {
      setError('');
    }
  };

  // Add custom task
  const addCustomTask = () => {
    if (customTask.trim().length > 5) {
      setTodos([...todos, customTask]);
      setCustomTask('');
      setError('');
    } else {
      setError('Task must be more than 5 characters');
    }
  };

  // Remove todo
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Task Management App</h1>
      
      <div className="container">
        {/* Left Panel - Todos */}
        <div className="todo-section">
          <h2>Todo List</h2>
          
          <div className="button-group">
            <button 
              onClick={addDefaultTodo}
              className="btn btn-primary"
              data-testid="add-todo-btn"
            >
              Add Todo
            </button>
            
            <button 
              onClick={incrementCounter}
              className="btn btn-secondary"
              data-testid="increment-btn"
            >
              Increment Counter: {counter}
            </button>
          </div>

          {/* Custom Task Input */}
          <div className="custom-task">
            <h3>Add Custom Task</h3>
            <input
              type="text"
              value={customTask}
              onChange={handleCustomTaskChange}
              placeholder="Enter custom task (more than 5 characters)"
              className="task-input"
              data-testid="memo-input"
            />
            {error && <div className="error-message">{error}</div>}
            <button 
              onClick={addCustomTask}
              className="btn btn-success"
              disabled={customTask.trim().length <= 5}
              data-testid="submit-btn"
            >
              Submit
            </button>
          </div>

          {/* Todo List */}
          <div className="todo-list">
            {todos.map((todo, index) => (
              <div key={index} className="todo-item">
                <span>{todo}</span>
                <button 
                  onClick={() => removeTodo(index)}
                  className="btn btn-danger btn-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="stats">
            <p>Total Todos: {todos.length}</p>
            <p>Counter Value: {counter}</p>
          </div>
        </div>

        {/* Right Panel - Memo Components */}
        <div className="memo-section">
          <UseMemo counter={counter} />
          <ReactMemo todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default App;
