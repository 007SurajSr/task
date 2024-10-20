import React, {useState} from 'react' 
 

function App() {
  const [todo, setTodo] = useState([])
  const [inputvalue, setInputValue] = useState("");

  const handleChage = (e) =>{
    setInputValue(e.target.value);
  }

  const handleClick = (e) => {
        e.preventDefault();
       setTodo([...todo, inputvalue]);
       setInputValue("");
  }
  
  return (
    <>
     <form>
      <input type="text" value={inputvalue} onChange={handleChage} />
      <button onClick={handleClick} >Add Todo</button>
     </form>
     <ul>
     {
      todo.map((value) => {
        return (<li>{value}</li>)
      })
     }
     </ul>
    </>
  );
}

export default App;
