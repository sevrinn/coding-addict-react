import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const BookList = () => {
	return (
		<section className="bookList">
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	)
}

const Book = () => {
	return (
		<article className="book">
			<Image />
			<Title />
			<Author />
		</article>
	)
}

const Image = () => {
	return (
		<img
			src="https://m.media-amazon.com/images/I/61PzAMU7SGL._AC_UY327_FMwebp_QL65_.jpg"
			alt=""
		/>
	)
}

const Title = () => {
	return <h2>JavaScript Data Structures and Algorithms</h2>
}

const Author = () => {
	return <h4>Sammie Bae</h4>
}

ReactDOM.render(<BookList />, document.getElementById('root'))
