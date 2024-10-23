//import logo from './logo.svg';
//import './App.css';
import {useState, useEffect } from 'react';

const items = [
  {
    id: 1,
    imageUrl: "https://wallpaperaccess.com/full/1103981.jpg",
    title: 'Item 1'
  },
  {
    id: 2,
    imageUrl: "https://th.bing.com/th/id/OIP.2OZJSqcrZFsw4sCcm4R2RAHaEK?rs=1&pid=ImgDetMain",
    title: 'Item 2'
  },
  {
    id: 3,
    imageUrl: "https://th.bing.com/th/id/R.db13eeef6192326eda37e226be8e9eb9?rik=AbihbULOTiSu4g&riu=http%3a%2f%2fwww.youloveit.com%2fuploads%2fposts%2f2017-04%2f1493105814_youloveit_com_pirates_of_the_caribbean_5_big_textless_posters16.jpg&ehk=xdUlE%2bH7nuQUixaQEhaLWi4cqVwWu9WGxQGOUPGYmVU%3d&risl=1&pid=ImgRaw&r=0",
    title: 'Item 3'
  }
]

function App() {
 const [active, setActive] = useState(0);

 const handlePrev = () => {
  if(active === 0){
    setActive(items.length -1 );
  }else{
    setActive(active - 1);
  }
   
 }

 const handleNext = () => {
  if(active === items.length - 1){
    setActive(0);
  } else{
    setActive(  active + 1)
  }
}
 
 useEffect(() => {
  let timer  = setTimeout(() => {
    handleNext();
  }, 1500);
  return () => clearTimeout(timer);
  // eslint-disable-next-line 
  }, [active]);


  return (
   <>
   <div>
    <img src={items[active].imageUrl}
    alt={items[active].title} 
    width={200}
    height={200}/>

    <h1>{items[active].title}</h1>
   </div>
   <button onClick={handlePrev} >  Prev Image</button>
   <button onClick={handleNext} >  Next Image</button>
    
   </>
  );
}

export default App;
