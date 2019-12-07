import React from 'react'
import Togglable from './Togglable'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { connect } from 'react-redux'

const postFormRef = React.createRef()
const url = 'http://localhost:3001/api/uploads/'
const epicStyling = {
	width: '55rem'
}
const lmao = {
	float: 'left'
}

const PostList = props => {
	const posts = props.posts
	const users = props.users
	const usernamelol = (users, postid) => {
		const user = users.find(user => user.posts.find(post => post.id === postid))
		return user === undefined ? null : user.username
	}

	let number = 0
	const okCounter = () => {
		console.log('click')
		return number + 1
	}
	return (
		<div className='container textcolor' style={epicStyling}>
			<div className='well'>
				{posts.map(post => (
					<div className='media surface mb-3 jumbotron' key={post.id}>
						<div className='media-body card-body inline'>
							<img
								src={require('../images/apache.png')}
								className='media-object imageToLeft'
								alt='kuva'
								width='64'
								height='64'
							></img>
							<h2 className='media-heading'>{usernamelol(users, post.id)}</h2>
							<br></br>
							<p>{post.content}</p>
							{post.postImg === null ? null : (
								<img
									className='horizontalLine mb-1'
									src={url + post.postImg}
									width='400'
									height='400'
								/>
							)}
							<div className='listStyling '>
								<ul className=''>
									<li>{post.date}</li>
									{number}
									<li className=''>
										<img
											src={require('../images/ok_sign2.png')}
											className='imagetoRight'
											alt='kuva'
											width='32'
											height='32'
											onClick={okCounter}
										></img>
									</li>
									<li>
										<img
											src={require('../images/exit_sign2.png')}
											className=' imagetoRight '
											alt='kuva'
											width='32'
											height='32'
										></img>
									</li>
								</ul>
							</div>
							<p className='horizontalLine pb-1'></p>
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
		</div>
	)
}
const mapStateToProps = state => {
	return {
		posts: state.posts,
		users: state.users
	}
}
//const mapDispatchToProps = { setNotification, vote }
const ConnectedPosts = connect(mapStateToProps)(PostList)
export default ConnectedPosts
