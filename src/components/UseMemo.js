import React, { useMemo } from 'react';

const UseMemo = ({ counter }) => {
  // Expensive calculation that we want to memoize
  const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result * counter;
  }, [counter]);

  const normalCalculation = () => {
    console.log('Performing normal calculation...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result * counter;
  };

  return (
    <div className="use-memo">
      <h2>useMemo Demonstration</h2>
      <div className="card">
        <h3>Counter Value: {counter}</h3>
        <div className="calculation">
          <h4>Memoized Calculation:</h4>
          <p>Result: {expensiveCalculation}</p>
          <p className="note">
            This calculation is memoized and only recomputes when counter changes.
          </p>
        </div>
        <div className="calculation">
          <h4>Normal Calculation:</h4>
          <p>Result: {normalCalculation()}</p>
          <p className="note">
            This calculation runs on every render (check console).
          </p>
        </div>
        <div className="explanation">
          <h4>How useMemo works:</h4>
          <ul>
            <li>Memoizes expensive calculations</li>
            <li>Only recomputes when dependencies change</li>
            <li>Improves performance for heavy computations</li>
            <li>Prevents unnecessary re-renders</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
