import React from 'react'
import home from '../home.png'
import error from '../error.png'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className='error'>
      <div className='home-icon'>
      <img className='home-icon-img' src={home}></img>
      </div>
      <img src={error}></img>
    </div>
  )
}

export default ErrorPage