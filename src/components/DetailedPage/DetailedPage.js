import React from 'react'
import { Link } from 'react-router-dom'
import './DetailedPage.css'

const DetailedPage = ({data, title, setTitle, setIsClicked}) => {
  console.log('DEATIL TITLE', title)

  const clickHandle = () => {
    setTitle("")
    setIsClicked("")
  }

return data.map(article => {
  // if(article.title === title) {
  return (
    <div className= 'detailed-page'>
     <Link to="/"><div className='arrow'>
      <h1 onClick={clickHandle}>←</h1>
      </div>
      </Link> 
      <h1>{article.title}</h1>
      <img className='detailed-image'src={article.urlToImage}></img>
      <h3 className='source'>Source:{article.source.name} Author:{article.author}</h3>
      <p className='content'>{article.content}</p>
    </div>
  )
// }
})
}

export default DetailedPage