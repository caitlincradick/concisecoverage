import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import './ArticleContainer.css'

const ArticleContainer = ({data, filter, isClicked, setIsClicked, title, setTitle}) => {
 
  console.log('TITLE', title)

  const clicked = (title) => {
      setIsClicked(true)
      setTitle(title)
  }

  //make set the state for title then say if the title matches the title in the data display just that title or whatever 

  const singleArticle = data.map(article => {
    if(article.title.toLowerCase().includes(filter) || article.description.toLowerCase().includes(filter)) {
      const key = uuidv4()
  return (
    <Link to="/article" key={key}>
    <div className='home-single' key={key} value={article.title} onClick={() => clicked(article.title)} >
      <h3 className='home-title'>{article.title}</h3>
      <img className='home-image'src={article.urlToImage}></img>
      <p className='home-description'>{article.description}</p>
    </div>
     </Link>
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