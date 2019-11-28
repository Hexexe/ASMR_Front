import React from 'react'
import Togglable from './Togglable'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'

const postFormRef = React.createRef()
const epicStyling = {
	width: '55rem'
}

const PostList = props => {
	const posts = props.posts
	return (
		<div>
			{posts.map(post => (
				<div
					className='card text-white bg-dark mb-3 mx-auto '
					style={epicStyling}
					key={post.id}
				>
					<h2 className='card-header'>{post.title}</h2>
					<p className='card-body'>{post.content}</p>
					<Togglable buttonLabel='Comment' ref={postFormRef}>
						<CommentForm />
					</Togglable>
				</div>
			))}
		</div>
	)
}
const mapStateToProps = state => {
	return {
		posts: state.posts
	}
}
//const mapDispatchToProps = { setNotification, vote }
const ConnectedPosts = connect(mapStateToProps)(PostList)
export default ConnectedPosts
