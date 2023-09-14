import './App.css';
import Header from '../Header/Header';
import { data } from '../../mockData';
import Homepage from '../Homepage/Homepage';
import DetailedPage from '../DetailedPage/DetailedPage';
import { getArticles } from '../../apiCalls';
import {Routes, Route, Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import dayjs from 'dayjs'


function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [title, setTitle] = useState("")
  const [source, setSource] = useState('')
  const [articles, setArticles] = useState([])
  const [selectedArticle, setSelectedArticle] = useState([])
  //selected article to pass into details page

  console.log('title', articles)
  
  const today = dayjs()
  const formatToday = today.format('YYYY-MM-DD')
  const threeDaysAgo = dayjs().subtract(2, 'day')
  const formatThreeDaysAgo = threeDaysAgo.format('YYYY-MM-DD')


  console.log(formatThreeDaysAgo)
  
  useEffect(() => {
   getArticles(formatToday, formatThreeDaysAgo)
   .then(d => setArticles(d.articles))
  }, [])
 



console.log(isClicked)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage data={articles} isClicked={isClicked} setIsClicked={setIsClicked} title={title} setTitle={setTitle} source={source} setSource={setSource} selectedArticle={selectedArticle} setSelectedArticle={setSelectedArticle}/>} />
        <Route path='/selectedArticle' element={<DetailedPage data={articles} isClicked={isClicked} setIsClicked={setIsClicked} title={title} setTitle={setTitle} source={source} setSource={setSource} selectedArticle={selectedArticle}/>} />
      </Routes>
    </div>
  );
}

export default App;
