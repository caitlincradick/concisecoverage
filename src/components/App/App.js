import './App.css';
import Header from '../Header/Header';
import { data } from '../../mockData';
import Homepage from '../Homepage/Homepage';
import DetailedPage from '../DetailedPage/DetailedPage';
import ErrorPage from '../../ErrorPage/ErrorPage';
import { getArticles } from '../../apiCalls';
import {Routes, Route, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import dayjs from 'dayjs'

function App() {

  const [articles, setArticles] = useState([])
  const [selectedArticle, setSelectedArticle] = useState([])

  const today = dayjs()
  const formatToday = today.format('YYYY-MM-DD')
  const threeDaysAgo = dayjs().subtract(2, 'day')
  const formatThreeDaysAgo = threeDaysAgo.format('YYYY-MM-DD')
  
  useEffect(() => {
    getArticles(formatToday, formatThreeDaysAgo)
      .then(d => setArticles(d.articles))
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage articles={articles}  selectedArticle={selectedArticle} setSelectedArticle={setSelectedArticle}/>} />
        <Route path='/article' element={<DetailedPage articles={articles} selectedArticle={selectedArticle}/>} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
