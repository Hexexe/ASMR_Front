import React from 'react'
import Togglable from './Togglable'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import { like, dislike } from '../reducers/postReducer'
import ScrollAnimation from 'react-animate-on-scroll'
var dateFormat = require('dateformat')

const postFormRef = React.createRef()
const url = 'http://localhost:3001/api/uploads/'
const epicStyling = {
	width: '55rem'
}
/* const lmao = {
	float: 'left'
} */

const PostList = props => {
	const posts = props.posts
	const users = props.users

	const usernamelol = (users, postid) => {
		const user = users.find(user => user.posts.find(post => post.id === postid))
		return user === undefined ? 'Anon' : user.username
	}
	const sortedPosts = posts.sort((a, b) => {
		a = new Date(a.date)
		b = new Date(b.date)
		return a > b ? -1 : a < b ? 1 : 0
	})

	return (
		<div className='container textcolor' style={epicStyling}>
			<div className='well'>
				{sortedPosts.map(post => (
					<ScrollAnimation animateIn='fadeIn' key={post.id}>
						<div className='media surface mb-3 jumbotron' key={post.id}>
							<div className='media-body card-body inline'>
								<img
									src={require('../images/apache.png')}
									className='media-object imageToLeft'
									alt='kuva'
									width='64'
									height='64'
								/>
								<h2 className='media-heading'>{`${usernamelol(
									users,
									post.id
								)} ${post.id}`}</h2>
								<br />
								<p>{post.content}</p>
								{post.postImg === null ? null : (
									<img
										className='mb-3 imageStyling'
										src={url + post.postImg}
										alt='kuva'
									/>
								)}
								<div className='text-muted '>
									<small>{dateFormat(post.date, 'HH.MM - d. mmmm yyyy')}</small>
								</div>
								<div className='horizontalLineUp'></div>
								<div className='listStyling '>
									<ul className=''>
										<li className=''>
											{post.wp}
											<img
												src={require('../images/ok_sign2.png')}
												className='imagetoRight'
												alt='kuva'
												width='32'
												height='32'
												onClick={() => props.like(post)}
											/>
										</li>

										<li>
											{post.gtfo}
											<img
												src={require('../images/exit_sign2.png')}
												className=' imagetoRight '
												alt='kuva'
												width='32'
												height='32'
												onClick={() => props.dislike(post)}
											/>
										</li>
										<li>
											<p>Reply</p>
										</li>
									</ul>
								</div>
								<div className='horizontalLineDown'></div>
								<br></br>

								<CommentList id={post.id} />
								{props.user === null ? '' : <CommentForm id={post.id} />}
							</div>
						</div>
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
