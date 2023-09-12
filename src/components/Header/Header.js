import React from 'react'
import dayjs from 'dayjs'
import './Header.css'

const Header = () => {

 const currentDate = dayjs()
 const day = currentDate.format('dddd')
 const formattedDate = currentDate.format('MM-DD-YYYY')


  return (
    <div className = 'header'>
    <h1>CONCISE COVERAGE</h1>
    <h3>{`${day}, ${formattedDate}`}</h3>
      </div>
  )
}

export default Header