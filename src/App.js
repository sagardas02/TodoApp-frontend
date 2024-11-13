
import { useEffect, useState } from 'react';
import './App.css';
import InputData from './Components/InputData';
import Navbar from './Components/Navbar';
import TodoData from './Components/TodoData';
import axios from 'axios';

function App() {
  const [todoposts, setTodoPost]= useState([])
axios.defaults.withCredentials = true;
 const Datafetching= async()=>{
    const response = await axios.get(process.env.BACKEND_LINK + "/api")
    setTodoPost(response?.data)
  }

  useEffect( ()=>{
    Datafetching()
  },[]);
  return (
    <>
    <Navbar/>
    <InputData setTodoPost={setTodoPost}/>
    <TodoData todoposts={todoposts} Datafetching={Datafetching}/>
    </>
  );
}

export default App;
