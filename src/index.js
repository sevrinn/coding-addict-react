import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//setup vars
const books = [
  {
    id: 1,
    image:
      'https://m.media-amazon.com/images/I/61PzAMU7SGL._AC_UY327_FMwebp_QL65_.jpg',
    author: 'Sammie Bae',
    title: 'JavaScript Data Structures and Algorithms',
  },
  {
    id: 2,
    image:
      'https://m.media-amazon.com/images/I/91Do0MNIrxL._AC_UY327_FMwebp_QL65_.jpg',
    author: 'Michael McMillan',
    title: 'Data Structures and Algorithms with JavaScript',
  },
]

const BookList = () => {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

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

ReactDOM.render(<BookList />, document.getElementById('root'))
