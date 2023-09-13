import './App.css';
import Header from '../Header/Header';
import { data } from '../../mockData';
import Homepage from '../Homepage/Homepage';
import DetailedPage from '../DetailedPage/DetailedPage';
import {Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [title, setTitle] = useState("")
console.log(isClicked)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage data={data.articles} isClicked={isClicked} setIsClicked={setIsClicked} title={title} setTitle={setTitle}/>} />
        <Route path='/article' element={<DetailedPage data={data.articles} isClicked={isClicked} setIsClicked={setIsClicked} title={title} setTitle={setTitle}/>} />
      </Routes>
    </div>
  );
}

export default App;
