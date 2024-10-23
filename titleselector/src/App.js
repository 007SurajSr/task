//import logo from './logo.svg';
import './App.css';
import { PostComponents } from './components/PostComponents';
import { useEffect, useState } from 'react';

function App() {
 const [page, setPage] = useState(1);
 const [post, setPost] = useState([]);

 useEffect(() => {
   fetchPost();
  // eslint-disable-next-line
 }, [])

 const fetchPost = async () => {
  const res = await fetch(`https://dummyjson.com/posts/${page}`);
  const post = await res.json();
  setPost(post);
 };


 console.log(post)

 const handlePageChange = (e) =>{
  setPage(e.target.value);
 }
 const handleSubmit = () => {
  fetchPost(); 
 }

  return (
   <>
   <PostComponents value={page} data={post} handlePageChange={handlePageChange} handleSubmit={handleSubmit} />
   </>  
  )
}

export default App;
