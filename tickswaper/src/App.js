//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
const [list1, setList1] = useState([
  {title: 'Item 1', checked: false},
  {title: 'Item 2', checked: false },
  {title: 'Item 3', checked: false}
]);

const [list2, setList2] = useState([
  {title: 'Item A', checked: false},
  {title: 'Item B', checked: false},
  {title: 'Item C', checked: false}
]);

const handleCheckBox = (index) => {
const updateList1 = [...list1];
updateList1[index].checked = !updateList1[index].checked;
setList1(updateList1);
};

const handleCheckBox2 = (index) => {
  const updateList2 = [...list2];
  updateList2[index].checked = ! updateList2[index].checked
  setList2(updateList2); 
}

const handleSwap = () => {
 const updateList1 = [...list1];
 const updateList2 = [...list2];
 updateList1.forEach((item, index) => {
  if(item.checked){
    const temp = updateList1[index].title;
    updateList1[index].title = updateList2[index].title;
    updateList2[index].title = temp;
  }
  updateList1[index].checked = false;
 })
 setList1(updateList1);
 setList2(updateList2);
}

const handleSwap2 = () => {
  const updateList2 = [...list2];
  const updateList1 = [...list1];
  updateList2.forEach((item, index) => {
    if(item.checked){
      const temp2 = updateList2[index].title;
      updateList2[index].title = updateList1[index].title;
      updateList1[index].title = temp2; 
    }
    updateList2[index].checked = false;
  } )
  setList2(updateList2);
  setList1(updateList1);
 }



  return (
   <>    
     <div>
      <h3>List 1</h3>
      <ul>
     {list1.map((item, index) => (
       <li key={index} >
      <input 
      type='checkbox' checked={item.checked}
      onChange={() => handleCheckBox(index)} 
      />
       {item.title}
       </li>
     )) }
      </ul>
      <button onClick={handleSwap2} > Click here to swap with the List 2 Taks</button>
    </div>

    <div>
      <h3>List 2</h3>
      <ul>
      {list2.map((item, index) => (
      <li key={index} >
        <input type='checkbox' checked={item.checked} onChange={() => handleCheckBox2(index)} >
        </input>
        {item.title}
      </li>
     )) }
      </ul>
    </div>
    <button onClick={handleSwap} >Click here to swap with the List 1 Taks </button>
    </>

  );
}

export default App;
