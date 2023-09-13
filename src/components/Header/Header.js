import React from 'react'
import dayjs from 'dayjs'
import './Header.css'

const Header = () => {

 const currentDate = dayjs()
 const day = currentDate.format('dddd')
 const formattedDate = currentDate.format('MMMM DD, YYYY')


  return (
    <div className = 'header'>
    <h1>CONCISE COVERAGE</h1>
    <h2 className='h2'>What you want to see, when you want to see it.</h2>
    <h3>{`${day}, ${formattedDate}`}</h3>
      </div>
  )
}

export default Header