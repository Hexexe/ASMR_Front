import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import Linkify from 'react-linkify'
import { connect } from 'react-redux'
import { like, dislike, purge } from '../reducers/postReducer'
const dateFormat = require('dateformat')

const Reply = props => {
	const users = props.users
	const post = props.post
	const auth = props.auth
	const user = users.find(user => user.posts.find(p => p === post.id))

	return (
		<div>
			<div className='media surface mb-3 jumbotron' key={post.id}>
				<div className='media-body inline background testi2'>
					<img
						src={user === undefined ? require('../images/avatars/wojak.png') : user.avatar}
						className='media-object imageToLeft '
						alt='kuva'
						width='64'
						height='64'
					/>
					<div clear='both'>
						<h4 className='media-heading commentControl'>
							{`${user && user.name.length !== 0 ? user.name : 'Anon'} replies to `}
							<small className='text-muted commentControl'>{post.parentId}</small>
						</h4>
						<small className='text-muted commentControl'>{post.id}</small>
					</div>

					<br />
					<Linkify>
						<p className='commentControl'>{post.content}</p>
					</Linkify>
					{post.postImg === null ? null : (
						<img className='mb-3 imageStyling' src={post.postImg.url} alt='kuva' />
					)}
					<small className='text-muted commentControl'>
						{dateFormat(post.date, 'HH:MM - d.m.yy')}
					</small>
					<div className='listStyling commentControl'>
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
							{/* Tästä pitäs aueta comment form  */}
						</ul>
					</div>
					<div className='horizontalLineDown'></div>
					<div className='btn-group ml-3' role='group' aria-label='Basic example'>
						{props.user === null ? '' : <CommentForm id={post.id} />}
						{auth.judgeDredd === true ? (
							<button className='btn primary text-dark ml-3 mt-1' onClick={() => props.purge(post)}>
								Purge
							</button>
						) : null}
					</div>
					<br></br>
					<br />
				</div>
			</div>
			<CommentList id={post.id} />
		</div>
	)
}
const mapStateToProps = state => {
	return {
		posts: state.posts,
		users: state.users,
		auth: state.auth
	}
}
const mapDispatchToProps = { like, dislike, purge }
const ConnectedPosts = connect(mapStateToProps, mapDispatchToProps)(Reply)
export default ConnectedPosts
