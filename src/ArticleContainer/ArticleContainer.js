import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import './ArticleContainer.css'

const ArticleContainer = ({articles, filter, selectedArticle, setSelectedArticle}) => {
 
 

  const clicked = (article) => {
      // setIsClicked(true)
      // setTitle(title)
      // setSource(source.name)
      setSelectedArticle(article)
  }

  // if (
  //   article.title &&
  //   article.description &&
  //   (article.title.toLowerCase().includes(filter) || article.description.toLowerCase().includes(filter))
  // ) {
  //make set the state for title then say if the title matches the title in the data display just that title or whatever 

  const singleArticle = articles.map(article => {
    if(article.title.toLowerCase().includes(filter) || article.description.toLowerCase().includes(filter)) {
      const key = uuidv4()
      return (
        <NavLink to="/article" key={key} style={{ textDecoration: 'none', color: 'black' }}>
          <div className='home-single' key={key} value={article.title} onClick={() => clicked(article)} >
            <p className='home-date'>{article.publishedAt.slice(0, 10)}</p>
            <img className='home-image' src={article.urlToImage} alt={article.title}></img>
            <h3 className='home-title'>{article.title}</h3>
            <p className='home-description'>{article.description}</p>
          </div>
        </NavLink>
      )
    } else if (!article){
      <p>nada nada </p>
    }
  })

  return (
    <div className='article-container'>
      {singleArticle}
    </div>
  )
}

export default ArticleContainer