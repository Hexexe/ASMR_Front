import React from 'react'
import Togglable from './Togglable'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
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
					className='media text-white bg-dark mb-3 mx-auto '
					style={epicStyling}
					key={post.id}
				>
					<img
						src={require('../images/testi.png')}
						className='mr-3 fluid'
						alt='kuva'
						width='64'
						height='64'
					></img>
					<div className='media-body'>
						<h2 className='mt-0'>{post.title}</h2>
						<p className=''>{post.content}</p>
						<CommentList id={post.id} />
						{props.user !== null ? (
							<Togglable buttonLabel='Comment' ref={postFormRef}>
								<CommentForm id={post.id} />
							</Togglable>
						) : (
							console.log('näin päästiin errorista eroon')
						)}
					</div>
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
