import React from 'react'
import { connect } from 'react-redux'
import ScrollAnimation from 'react-animate-on-scroll'
import Reply from './Reply'

const CommentList = props => {
	const posts = props.posts
	const id = props.id
	const sortedCom = posts.sort((a, b) => {
		a = new Date(a.date)
		b = new Date(b.date)
		return a > b ? -1 : a < b ? 1 : 0
	})

	return (
		<div>
			{sortedCom
				.filter(comment => comment.parentId === id)
				.map(comment => (
					<ScrollAnimation animateIn='fadeIn' key={comment.id}>
						<Reply post={comment} />
					</ScrollAnimation>
				))}
		</div>
	)
}
const mapStateToProps = state => {
	return {
		posts: state.posts,
		users: state.users
	}
}

const ConnectedComments = connect(mapStateToProps)(CommentList)
export default ConnectedComments
