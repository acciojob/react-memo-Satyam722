import React, { useState } from 'react';
import ReactMemo from './ReactMemo';
import UseMemo from './UseMemo';
import '../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState(['Task 1', 'Task 2']);
  const [counter, setCounter] = useState(0);
  const [memoInput, setMemoInput] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleSubmit = () => {
    if (memoInput.length > 5) {
      setTodos([...todos, memoInput]);
      setMemoInput('');
    }
  };

  const handleInputChange = (e) => {
    setMemoInput(e.target.value);
  };

  return (
    <div className="app">
      <div className="main-content">
        <div className="todo-section">
          <h2>Todos</h2>
          <div className="todos-list">
            {todos.map((todo, index) => (
              <div key={index} className="todo-item">
                {todo}
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleAddTodo}
            className="btn add-todo-btn"
            data-testid="add-todo-btn"
          >
            Add Todo
          </button>
          
          <div className="counter-section">
            <h3>Counter: {counter}</h3>
            <button 
              onClick={handleIncrement}
              className="btn increment-btn"
              data-testid="increment-btn"
            >
              Increment
            </button>
          </div>
        </div>

        <div className="input-section">
          <h3>Add Custom Task</h3>
          <input
            type="text"
            value={memoInput}
            onChange={handleInputChange}
            placeholder="Enter task (more than 5 characters)"
            className="memo-input"
            data-testid="memo-input"
          />
          <button 
            onClick={handleSubmit}
            className="btn submit-btn"
            disabled={memoInput.length <= 5}
            data-testid="submit-btn"
          >
            Submit
          </button>
          {memoInput.length > 0 && memoInput.length <= 5 && (
            <p className="error">Task must be more than 5 characters</p>
          )}
        </div>
      </div>

      <div className="memo-demo">
        <UseMemo counter={counter} />
        <ReactMemo todos={todos} />
      </div>
    </div>
  );
};

export default App;
