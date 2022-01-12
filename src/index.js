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
				return <Book book={book} key={book.id}></Book>
			})}
		</section>
	)
}

const Book = (props) => {
	const { image, title, author } = props.book
	return (
		<article className='book'>
			<img src={image} alt='' />
			<h2>{title}</h2>
			<h4 className='author'>{author}</h4>
		</article>
	)
}

ReactDOM.render(<BookList />, document.getElementById('root'))
