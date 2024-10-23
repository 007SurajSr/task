//import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const increament = () => {
    setCount(count + 1 );
  }

  const decreament = () => {
    setCount(count - 1 );
  }

  return (
    <div>
      <button onClick={increament} > Click me to Add</button>
      <div>{count}</div>
      <button onClick={decreament} > Click me to Reduce</button>
    </div>
  );
}

export default App;
