import React from 'react'

const Book = (props) => {
  const { image, title, author } = props

  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e.target.innerText)
  }

  return (
    <article className='book'>
      <img src={image} alt='' />
      <h2 onClick={clickHandler}>{title}</h2>
      <h4
        className='author'
        onMouseOver={(e) => console.log(e.target.innerText)}
      >
        {author}
      </h4>
      <button type='button'></button>
    </article>
  )
}

export default Book
