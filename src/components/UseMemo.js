import React, { useMemo, useState } from 'react';

const UseMemo = ({ counter }) => {
  const [value, setValue] = useState(0);

  // Expensive calculation - memoized
  const memoizedCalculation = useMemo(() => {
    console.log('Running memoized calculation...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result * counter;
  }, [counter]);

  // Expensive calculation - not memoized
  const nonMemoizedCalculation = () => {
    console.log('Running non-memoized calculation...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result * counter;
  };

  return (
    <div className="use-memo-demo">
      <h2>useMemo Demo</h2>
      <div className="counter-info">
        <p>Counter value from parent: {counter}</p>
        <p>Local value: {value}</p>
        <button onClick={() => setValue(value + 1)}>
          Increment Local Value
        </button>
      </div>
      
      <div className="calculations">
        <div className="memo-calculation">
          <h3>Memoized Calculation</h3>
          <p>Result: {memoizedCalculation}</p>
          <p className="explanation">
            This only recalculates when counter changes
          </p>
        </div>
        
        <div className="non-memo-calculation">
          <h3>Non-Memoized Calculation</h3>
          <p>Result: {nonMemoizedCalculation()}</p>
          <p className="explanation">
            This recalculates on every render
          </p>
        </div>
      </div>
      
      <div className="instructions">
        <h4>Instructions:</h4>
        <ul>
          <li>Click "Increment Counter" to see memoized calculation update</li>
          <li>Click "Increment Local Value" to see only non-memoized calculation update</li>
          <li>Check console for calculation logs</li>
        </ul>
      </div>
    </div>
  );
};

export default UseMemo;
