import React from 'react'
import './DetailedPage.css'

const DetailedPage = ({data}) => {
  console.log('deialakld', data[2])
  return (
    <div className= 'detailed-page'>
      <div className='arrow'>
      <h1>←</h1>
      </div>
      <h1>{data[2].title}</h1>
      <img className='detailed-image'src={data[2].urlToImage}></img>
      <h3 className='source'>Source:{data[2].source.name} Author:{data[2].author}</h3>
      <p className='content'>{data[2].content}</p>
    </div>
  )
}

export default DetailedPage