import React from 'react'
import Togglable from './Togglable'
import CommentForm from './CommentForm'

const postFormRef = React.createRef()

const epicStyling = {
	width: '55rem'
}

const Post = ({ post }) => (
	<div className='card text-white bg-dark mb-3 mx-auto' style={epicStyling}>
		<h2 className='card-header'>{post.title}</h2>{' '}
		<p className='card-body'>{post.content}</p>
		<Togglable buttonLabel='Comment' ref={postFormRef}>
			<CommentForm />
		</Togglable>
	</div>
)
export default Post
