import React, { memo } from 'react';

// Memoized component
const TodoItem = memo(({ todo, index }) => {
  console.log(`TodoItem ${index} rendered`);
  return (
    <div className="memo-todo-item">
      <span>Todo {index + 1}: {todo}</span>
    </div>
  );
});

// Non-memoized component for comparison
const NonMemoTodoItem = ({ todo, index }) => {
  console.log(`NonMemoTodoItem ${index} rendered`);
  return (
    <div className="non-memo-todo-item">
      <span>Todo {index + 1}: {todo}</span>
    </div>
  );
};

const ReactMemo = ({ todos }) => {
  console.log('ReactMemo component rendered');
  
  return (
    <div className="react-memo-demo">
      <h2>React.memo Demo</h2>
      <div className="comparison">
        <div className="memo-section">
          <h3>With React.memo</h3>
          <div className="todos-container">
            {todos.map((todo, index) => (
              <TodoItem key={index} todo={todo} index={index} />
            ))}
          </div>
        </div>
        
        <div className="non-memo-section">
          <h3>Without React.memo</h3>
          <div className="todos-container">
            {todos.map((todo, index) => (
              <NonMemoTodoItem key={index} todo={todo} index={index} />
            ))}
          </div>
        </div>
      </div>
      <p className="note">Check console to see rendering differences</p>
    </div>
  );
};

export default ReactMemo;
