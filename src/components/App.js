import React, { useState, useMemo, memo } from 'react';
import './App.css';

// Memoized component
const TodoItem = memo(({ todo }) => {
  return <li>{todo}</li>;
});

// Expensive calculation component
const ExpensiveComponent = ({ count }) => {
  const expensiveValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result * count;
  }, [count]);

  return <div>Expensive Value: {expensiveValue}</div>;
};

function App() {
  const [todos, setTodos] = useState(['Task 1', 'Task 2']);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const handleSubmit = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      
      <div className="section">
        <h2>Todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </ul>
        <button 
          data-testid="add-todo-btn"
          onClick={addTodo}
          className="button"
        >
          Add Todo
        </button>
      </div>

      <div className="section">
        <h2>Counter: {count}</h2>
        <button 
          data-testid="increment-btn"
          onClick={increment}
          className="button"
        >
          Increment
        </button>
      </div>

      <div className="section">
        <h2>Add Custom Task</h2>
        <input
          type="text"
          data-testid="memo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task (more than 5 characters)"
          className="input"
        />
        {input.length > 0 && input.length <= 5 && (
          <p className="error">Task must be more than 5 characters</p>
        )}
        <button
          data-testid="submit-btn"
          onClick={handleSubmit}
          disabled={input.length <= 5}
          className="button"
        >
          Submit
        </button>
      </div>

      <div className="section">
        <ExpensiveComponent count={count} />
      </div>
    </div>
  );
}

export default App;
