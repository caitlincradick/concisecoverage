import React from 'react'
import ArticleContainer from '../../ArticleContainer/ArticleContainer'
import FilterTags from '../../FilterTags/FilterTags'
import { useState } from 'react'
import './Homepage.css'

const Homepage = ({ articles, selectedArticle, setSelectedArticle }) => {

const [filter, setFilter] = useState('')

  return (
    <div className='homepage'>
      <FilterTags filter={filter} setFilter={setFilter} />
      <ArticleContainer articles={articles} filter={filter} setFilter={setFilter} selectedArticle={selectedArticle} setSelectedArticle={setSelectedArticle} />
    </div>
  )
}

export default Homepage