import React from 'react'
import { NavLink } from 'react-router-dom'
import './DetailedPage.css'

const DetailedPage = ({ data, selectedArticle }) => {

  return data.map(article => {
    if (article === selectedArticle) {
      return (
        <div className='detailed-page' >
          <NavLink to="/"><div className='arrow' style={{ textDecoration: 'none' }} >
            <h1>←</h1>
          </div>
          </NavLink>
          <h1>{article.title}</h1>
          <img className='detailed-image' src={article.urlToImage} alt={article.title}></img>
          <h3 className='source'>Source:  {article.source.name}   Author: {article.author}</h3>
          <p>Date:  {article.publishedAt.slice(0, 10)}</p>
          <p className='content'>{article.content}</p>
        </div>
      )
    }
  })
}

export default DetailedPage