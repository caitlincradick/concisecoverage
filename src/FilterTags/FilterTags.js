import React from 'react'
import './FilterTags.css'

const FilterTags = ({setFilter}) => {

const clearFilter = () => {
  setFilter("")
}

  return (
    <div className='filter-tags'>
      <button className='climate' value='climate' onClick={(e => setFilter(e.target.value))}>Climate</button>
      <button className='tesla' value='tesla' onClick={(e => setFilter(e.target.value))}>Tesla</button>
      <button className='apple' value='apple' onClick={(e => setFilter(e.target.value))}>Apple</button>
      <button className='clear' onClick={clearFilter}>Clear Filters</button>
    </div>
  )
}

export default FilterTags