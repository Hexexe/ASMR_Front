import React from 'react'
import { connect } from 'react-redux'
import { like, dislike } from '../reducers/postReducer'
import ScrollAnimation from 'react-animate-on-scroll'
import Post from './Post'

const PostList = props => {
	const posts = props.posts
	const sortedPosts = posts.sort((a, b) => {
		a = new Date(a.date)
		b = new Date(b.date)
		return a > b ? -1 : a < b ? 1 : 0
	})
	const epicStyling = {
		width: '55rem'
	}

	return (
		<div className='container textcolor' style={epicStyling}>
			<div className='well'>
				{sortedPosts
					.filter(p => p.parentId === null)
					.map(post => (
						<ScrollAnimation animateIn='fadeIn' key={post.id}>
							<Post post={post} />
						</ScrollAnimation>
					))}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
		users: state.users
	}
}
const mapDispatchToProps = { like, dislike }
const ConnectedPosts = connect(mapStateToProps, mapDispatchToProps)(PostList)
export default ConnectedPosts
