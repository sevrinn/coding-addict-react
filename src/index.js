import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//setup vars
const firstBook = {
	image:
		'https://m.media-amazon.com/images/I/61PzAMU7SGL._AC_UY327_FMwebp_QL65_.jpg',
	author: 'Sammie Bae',
	title: 'JavaScript Data Structures and Algorithms',
}

const secondBook = {
	image:
		'https://m.media-amazon.com/images/I/91Do0MNIrxL._AC_UY327_FMwebp_QL65_.jpg',
	author: 'Michael McMillan',
	title: 'Data Structures and Algorithms with JavaScript',
}

const BookList = () => {
	return (
		<section className='bookList'>
			<Book
				image={firstBook.image}
				author={firstBook.author}
				title={firstBook.title}
			/>
			<Book
				image={secondBook.image}
				author={secondBook.author}
				title={secondBook.title}
			/>
		</section>
	)
}

const Book = ({ image, title, author }) => {
	// const { image, title, author } = props
	return (
		<article className='book'>
			<img src={image} alt='' />
			<h2>{title}</h2>
			<h4 className='author'>{author}</h4>
		</article>
	)
}

ReactDOM.render(<BookList />, document.getElementById('root'))
