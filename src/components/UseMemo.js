import React, { useMemo } from 'react';

const UseMemo = ({ counter }) => {
  const memoizedValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result * counter;
  }, [counter]);

  return (
    <div>
      <h3>useMemo Demonstration</h3>
      <p>Counter: {counter}</p>
      <p>Memoized Value: {memoizedValue}</p>
    </div>
  );
};

export default UseMemo;
