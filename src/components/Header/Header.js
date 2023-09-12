import React from 'react'
import './Header.css'

const Header = () => {

  const formattedDate = dayjs(date).format('MMMM D, YYYY')

  
  return (
    <div className = 'header'>
    <p> Today's Date: </p>
    <h1>CONCISE COVERAGE</h1>
      </div>
  )
}

export default Header