
import './App.css';
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';

function App() {

  function handleClick() {
    alert("I am Clicked")
  }

  const handleClick2 = () => {
    alert("Clicked 2 successful")
  }

  const handleAdd5 = (num) => {
    const newNumber = num + 5;
    alert(newNumber)
  }

  return (
    <>
      <h3>React Core Concept</h3>
      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => alert("Clicked 3 done")}>Click Me 3</button>
      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
      {/* 32-3 A simple Introduction to State change in React */}
      <Counter></Counter>
      {/* 32-4 Understand the concept of useState and react hooks */}
      <Batsman></Batsman>
      {/* 32-5 (Advanced) Understand the concept of use() hook */}
      <Users></Users>
    </>
  );
}

export default App
