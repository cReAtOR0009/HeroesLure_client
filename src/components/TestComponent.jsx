import React, { useState, useEffect } from 'react';

const Component = () => {
  const [count, setCount] = useState(0);
  console.log("re rendering........")

  useEffect(() => {
    // This function will be called after every render
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Component;
