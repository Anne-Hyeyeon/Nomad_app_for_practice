import Button from "./Button";
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function Hello(){
  const destroyedFn = () => {
    console.log("bye!");
  }

  const effectFn = () => {
    console.log("created!");
    return destroyedFn;
  }
  useEffect(effectFn,[])
  return (<h1>Hello</h1>);
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>
      {showing ? "Hide" : "Show"}  
      </button>      
    </div>
  );
}

export default App;
