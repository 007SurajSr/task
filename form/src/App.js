//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  const [formdata, setFormdata] = useState({
     name: "",
     email: ""
  })
  
  const handleChange = (e) => {
  
   const {name, value}  = e.target;
   setFormdata((pState) => {
    return {...pState, [name]: value};
   });
  };
  
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('formData', formdata);
  fetch(`https://dummyjson.com/posts/`, {  
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      title : formdata.name
    })
  })
  .then((res) => res.json )
  .then((res) => console.log(res))
 

};

  return (
    <>
     <form onSubmit={handleSubmit}>
    <div>
      <label> Name: </label>
      <input  type='text' name='name' value={formdata.name} onChange={handleChange}/>
    </div>
    <div>
      <label> Email: </label>
      <input  type='text' name='email' value={formdata.email} onChange={handleChange} />
    </div>
    <button type='submit'   > Submit </button>
    
     </form>
    </>
  );
}

export default App;
