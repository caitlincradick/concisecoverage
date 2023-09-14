import React from 'react'
import home from '../home.png'
import error from '../error.png'
import { Link } from 'react-router-dom'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className='error'>
      <div className='home-icon'>
        <Link to="/">
          <img className='home-icon-img' src={home}></img>
        </Link>
      </div>
      <img src={error}></img>
    </div>
  )
}

export default ErrorPage