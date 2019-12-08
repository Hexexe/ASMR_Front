import React from 'react'
import { connect } from 'react-redux'
var dateFormat = require('dateformat')

/* const postFormRef = React.createRef()
const epicStyling = {
	width: '45rem'
} */

const CommentList = props => {
	const comments = props.comments
	const id = props.id
	const url = 'http://localhost:3001/api/uploads/'
	const sortedCom = comments.sort((a, b) => {
		a = new Date(a.date)
		b = new Date(b.date)
		return a > b ? -1 : a < b ? 1 : 0
	})

	return (
		<div>
			{sortedCom
				.filter(comment => comment.post === id)
				.map(comment => (
					<div className='card mb-1 mt-3 background' key={comment.id}>
						<h5 className='text-muted'>
							{id} {dateFormat(comment.date, 'd. mmmm')}
						</h5>
						<p className='card-body'>
							<small>{comment.content}</small>
						</p>
						{comment.postImg === null ? null : (
							<img
								className='horizontalLine mb-1'
								src={url + comment.postImg}
								width='400'
								height='400'
								alt='kuva'
							/>
						)}
					</div>
				))}
		</div>
	)
}
const mapStateToProps = state => {
	return {
		comments: state.comments,
		posts: state.posts
	}
}
//const mapDispatchToProps = { setNotification, vote }
const ConnectedComments = connect(mapStateToProps)(CommentList)
export default ConnectedComments
