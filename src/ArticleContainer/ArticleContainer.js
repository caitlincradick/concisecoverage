import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import './ArticleContainer.css'

const ArticleContainer = ({data, filter, setFilter}) => {


  const singleArticle = data.map(article => {
    if(article.title.toLowerCase().includes(filter) || article.description.toLowerCase().includes(filter)) {
  return (
    <div className='home-single' key={uuidv4()} id={article.title}>
      <h3 className='home-title'>{article.title}</h3>
      <img className='home-image'src={article.urlToImage}></img>
      <p className='home-description'>{article.description}</p>
    </div>
  )
}
})

return (
  <div className='article-container'>
    {singleArticle}
  </div>
)
}

export default ArticleContainer