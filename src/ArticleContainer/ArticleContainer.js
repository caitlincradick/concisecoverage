import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import './ArticleContainer.css'

const ArticleContainer = ({data}) => {
  console.log('articl', data)

  const singleArticle = data.map(article => {
    console.log(article.title)
  return (
    <div className='home-single' key={uuidv4()} id={article.title}>
      <h3 className='home-title'>{article.title}</h3>
      <img className='home-image'src={article.urlToImage}></img>
      <p className='home-description'>{article.description}</p>
    </div>
  )
})
return (
  <div className='article-container'>
    {singleArticle}
  </div>
)
}

export default ArticleContainer