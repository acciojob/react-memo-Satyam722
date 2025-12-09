
import React, { memo } from 'react';

const MemoizedTodo = memo(({ todo }) => {
  return <div className="todo">{todo}</div>;
});

const NonMemoizedTodo = ({ todo }) => {
  return <div className="todo">{todo}</div>;
};

const ReactMemo = ({ todos }) => {
  return (
    <div>
      <h3>React.memo Demonstration</h3>
      <div>
        <h4>Memoized Todos:</h4>
        {todos.map((todo, i) => (
          <MemoizedTodo key={i} todo={todo} />
        ))}
      </div>
      <div>
        <h4>Non-Memoized Todos:</h4>
        {todos.map((todo, i) => (
          <NonMemoizedTodo key={i} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default ReactMemo;
