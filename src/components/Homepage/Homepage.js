import React from 'react'
import ArticleContainer from '../../ArticleContainer/ArticleContainer'
import FilterTags from '../../FilterTags/FilterTags'
import { useState } from 'react'
import './Homepage.css'

const Homepage = ({data}) => {
const [filter, setFilter] = useState('')

  return (
    <div className ='homepage'>
      <FilterTags filter={filter} setFilter={setFilter}/>
      <ArticleContainer data ={data} filter={filter} setFilter={setFilter}/>
    </div>
  )
}

export default Homepage