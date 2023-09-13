import React from 'react'
import { NavLink } from 'react-router-dom'
import './DetailedPage.css'

const DetailedPage = ({data, title, setTitle, setIsClicked, source}) => {
  console.log('DEATIL TITLE', title)

  const clickHandle = () => {
    setTitle("")
    setIsClicked("")
  }

return data.map(article => {
  if(article.title === title && article.source.name === source) {
    console.log(article.publishedAt.slice(0,10))
  return (
    <div className= 'detailed-page' >
     <NavLink to="/"><div className='arrow'style={{textDecoration:'none'}} >
      <h1>←</h1>
      </div>
      </NavLink> 
      <h1>{article.title}</h1>
      <img className='detailed-image'src={article.urlToImage} alt={article.title}></img>
      <h3 className='source'>Source:  {article.source.name}   Author: {article.author}</h3>
      <p>Date:  {article.publishedAt.slice(0,10)}</p>
      <p className='content'>{article.content}</p>
    </div>
  )
}
})
}

export default DetailedPage