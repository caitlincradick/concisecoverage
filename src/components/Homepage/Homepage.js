import React from 'react'
import ArticleContainer from '../../ArticleContainer/ArticleContainer'
import FilterTags from '../../FilterTags/FilterTags'
import './Homepage.css'

const Homepage = ({data}) => {
  return (
    <div className ='homepage'>
      <FilterTags />
      <ArticleContainer data ={data}/>
    </div>
  )
}

export default Homepage