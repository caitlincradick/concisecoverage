import React from 'react'
import './FilterTags.css'

const FilterTags = ({setFilter}) => {

const clearFilter = () => {
  setFilter("")
}

  return (
    <div className='filter-tags'>
      <button className='climate' value='climate' onClick={(e => setFilter(e.target.value))}>Climate</button>
      <button className='politics' value='cats' onClick={(e => setFilter(e.target.value))}>Cats</button>
      <button className='vanderpump' value= 'vanderpump' onClick={(e => setFilter(e.target.value))}>Vanderpump</button>
    <button className='clear' onClick={clearFilter}>Clear Filters</button>
    </div>
  )
}

export default FilterTags