import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import { like, dislike, purge } from '../reducers/postReducer'
const dateFormat = require('dateformat')

const Post = props => {
	const users = props.users
	const post = props.post
	const auth = props.auth
	const user = users ? users.find(user => user.posts.find(post => post === post.id)) : null

	return (
		<div className='media surface mb-3 jumbotron ' key={post.id}>
			<div className='media-body inline pt-3'>
				{/* Käyttäjän kuva */}
				<img
					src={user ? user.avatar : null}
					className='media-object imageToLeft '
					alt='kuva'
					width='64'
					height='64'
				/>
				<h2 className='media-heading '>{`${user ? user.name : null}`}</h2>
				<small className='text-muted'>{post.id}</small>
				<br />
				{/* postauksen sisältö (jos kuva niin kuva myös)  */}
				<p className='commentControl pr-3'>{post.content}</p>
				{post.postImg === null ? null : (
					<a href={post.postImg.url} target='_blank' rel='noopener noreferrer'>
						<img className='mb-3 imageStyling commentControl' src={post.postImg.url} alt='kuva' />
					</a>
				)}
				{/* päiväys  */}
				<div className='text-muted commentControl'>
					<small>{dateFormat(post.date, 'HH:MM - d. mmmm yyyy')}</small>
				</div>
				{/* Like/Dislike  */}
				<div className='horizontalLineUp'></div>
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
						<li></li>
					</ul>
				</div>
				<div className='horizontalLineDown'></div>
				<div className='btn-group commentControl' role='group' aria-label='Basic example'>
					{props.user === null ? '' : <CommentForm id={post.id} />}
					{auth.judgeDredd === true ? (
						<button className='btn primary text-dark ml-3 mt-3' onClick={() => props.purge(post)}>
							Purge
						</button>
					) : null}
				</div>
				<div className='media'>
					<div className='media-body card-body inline'>
						<CommentList id={post.id} />
					</div>
				</div>
			</div>
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
const ConnectedPosts = connect(mapStateToProps, mapDispatchToProps)(Post)
export default ConnectedPosts
