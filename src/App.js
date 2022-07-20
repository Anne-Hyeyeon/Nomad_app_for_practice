import { useState } from "react";

function App() {
  const [toDo, setToDo] =  useState("");
  const [toDos, setToDos] = useState([]);
  //여러개의 투두리스트를 받는 배열
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    //등차수열처럼 늘어난다^^;; ToDos는 Array지롱! 기억하자.
  };  
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
    //우리는 리액트에서 state를 (배열, 객체) 직접 수정하지 못한다. (array.push 안됨)
    //대신 수정하는 함수를 쓴다. Modifier, 이 문서에서는 setToDo

  );
}

export default App;
