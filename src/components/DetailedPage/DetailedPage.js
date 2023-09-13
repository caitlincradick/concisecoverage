import React from 'react'
import { Link } from 'react-router-dom'
import './DetailedPage.css'

const DetailedPage = ({data, title, setTitle, setIsClicked, source}) => {
  console.log('DEATIL TITLE', title)

  const clickHandle = () => {
    setTitle("")
    setIsClicked("")
  }

return data.map(article => {
  if(article.title === title && article.source.name === source) {
  return (
    <div className= 'detailed-page'>
     <Link to="/"><div className='arrow'>
      <h1>←</h1>
      </div>
      </Link> 
      <h1>{article.title}</h1>
      <img className='detailed-image'src={article.urlToImage} alt={article.title}></img>
      <h3 className='source'>Source:{article.source.name} Author:{article.author}</h3>
      <p className='content'>{article.content}</p>
    </div>
  )
}
})
}

export default DetailedPage