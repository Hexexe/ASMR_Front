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
	const users = props.users
	const usernamelol = (users, postid) => {
		const user = users.find(user => user.posts.find(post => post.id === postid))
		return user === undefined ? null : user.username
	}
	return (
		<div className='container' style={epicStyling}>
			<div className='well'>
				{posts.map(post => (
					<div className='media bg-dark mb-3' key={post.id}>
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
							<p className='horizontalLine mb-1'>{post.content}</p>
							<div className='listStyling'>
								<ul className='listStyling'>
									<li>
										{' '}
										<a className='listStyling'>{post.date}</a>
									</li>
									<li className=''>
										<a className='listStyling '>
											<img
												src={require('../images/Wp2.png')}
												className=' imageToLeft '
												alt='kuva'
												width='32'
												height='32'
											></img>
										</a>
									</li>
									<li className=''>
										<a className='listStyling '>
											<img
												src={require('../images/exit.png')}
												className=' imageToLeft '
												alt='kuva'
												width='32'
												height='32'
											></img>
										</a>
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
