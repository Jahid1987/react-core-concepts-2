import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleReduce(){
    setCount(count -1)
  }
  const countStyle = {
    border: '2px solid green',
    margin: '15px',
    padding: '15px',
    borderRadius: '10px'
}
  return (
    <div style={countStyle}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add 1</button>
      <button onClick={handleReduce}>Reduce 1</button>
    </div>
  );
}

export default Counter;
