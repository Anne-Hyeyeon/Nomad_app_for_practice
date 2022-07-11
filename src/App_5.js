import Button from "./Button";
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setCounter((prev) => prev + 1);
  const iRunOnlyOnce = () => {
    console.log("I run only once.")
  }
  useEffect(iRunOnlyOnce, []);
  useEffect(()=>{
     console.log("I run when 'keyword' changes.")
  }, [keyword]);
  useEffect(()=>{
    console.log("I run when 'counter' changes.")
 }, [counter])
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search Here" />
      <h1 className={styles.title}>Welcome back! {counter}</h1>
      <button  onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
