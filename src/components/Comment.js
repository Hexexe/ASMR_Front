import React from 'react'

const epicStyling = {
	width: '55rem'
}

const Comment = ({ post }) => (
	<div className='card text-white bg-dark mb-3 mx-auto' style={epicStyling}>
		<p className='card-body'>{post.content}</p>
	</div>
)
export default Comment
