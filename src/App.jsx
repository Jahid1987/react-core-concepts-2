import "./App.css";
import Counter from "./components/Counter";
import Team from "./components/Team";
import Users from "./components/Users";
import Posts from "./components/Posts";

function App() {
  function handleClick(name) {
    console.log(name);
  }
  return (
    <>
      <h1>React Core 2</h1>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Posts></Posts>
      <button onClick={()=> handleClick('jahid')}>Click me</button>
    </>
  );
}

export default App;
