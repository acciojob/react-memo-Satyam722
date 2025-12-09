import React, { memo } from 'react';

// Child component that will be memoized
const TodoItem = memo(({ todo, index }) => {
  console.log(`TodoItem ${index} rendered`);
  return (
    <div className="todo-item-small">
      <span>{todo}</span>
    </div>
  );
});

// Another child component without memo (for comparison)
const TodoItemWithoutMemo = ({ todo, index }) => {
  console.log(`TodoItemWithoutMemo ${index} rendered`);
  return (
    <div className="todo-item-small">
      <span>{todo}</span>
    </div>
  );
};

const ReactMemo = ({ todos }) => {
  return (
    <div className="react-memo">
      <h2>React.memo Demonstration</h2>
      <div className="card">
        <h3>Todo List (Memoized)</h3>
        <div className="todo-list-memo">
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} />
          ))}
        </div>
        
        <h3>Todo List (Not Memoized)</h3>
        <div className="todo-list-normal">
          {todos.map((todo, index) => (
            <TodoItemWithoutMemo key={index} todo={todo} index={index} />
          ))}
        </div>
        
        <div className="explanation">
          <h4>How React.memo works:</h4>
          <ul>
            <li>Memoizes component to prevent unnecessary re-renders</li>
            <li>Only re-renders when props change</li>
            <li>Check console to see rendering differences</li>
            <li>Use for pure functional components</li>
          </ul>
          <p className="note">
            Open browser console to see which components re-render when you add todos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReactMemo;
