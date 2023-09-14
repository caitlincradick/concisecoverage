import React from 'react'
import ArticleContainer from '../../ArticleContainer/ArticleContainer'
import FilterTags from '../../FilterTags/FilterTags'
import { useState } from 'react'
import './Homepage.css'

const Homepage = ({data, isClicked, setIsClicked, title, setTitle, source, setSource, selectedArticle, setSelectedArticle}) => {
const [filter, setFilter] = useState('')

  return (
    <div className ='homepage'>
      <FilterTags filter={filter} setFilter={setFilter}/>
      <ArticleContainer data ={data} filter={filter} setFilter={setFilter} isClicked={isClicked} setIsClicked={setIsClicked} title={title} setTitle={setTitle} source={source} setSource={setSource} selectedArticle={selectedArticle} setSelectedArticle={setSelectedArticle}/>
    </div>
  )
}

export default Homepage