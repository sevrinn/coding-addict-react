import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//setup vars
import { books } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
