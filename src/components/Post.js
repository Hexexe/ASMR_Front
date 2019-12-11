import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import { like, dislike, purge } from '../reducers/postReducer'
import { Button, Modal, ModalBody, Input, Label } from 'reactstrap'
const dateFormat = require('dateformat')

const Post = props => {
	const users = props.users
	const post = props.post
	const auth = props.auth

	const usernamelol = (users, postid) => {
		const user = users.find(user => user.posts.find(post => post === postid))
		return user === undefined ? 'Anon' : user.username
	}
	return (
		<div className='media surface mb-3 jumbotron' key={post.id}>
			<div className='media-body card-body inline'>
				{/* Käyttäjän kuva */}
				<img
					src={require('../images/avatars/wojak.png')}
					className='media-object imageToLeft'
					alt='kuva'
					width='64'
					height='64'
				/>
				{/* Käyttäjän nimi (anon jos tyhjä) */}
				<h2 className='media-heading'>{`${usernamelol(users, post.id)}`}</h2>
				<br />
				{/* postauksen sisältö (jos kuva niin kuva myös)  */}
				<p>{post.content}</p>
				{post.postImg === null ? null : (
					<img className='mb-3 imageStyling' src={post.postImg} alt='kuva' />
				)}
				{/* päiväys  */}
				<div className='text-muted '>
					<small>{dateFormat(post.date, 'HH.MM - d. mmmm yyyy')}</small>
				</div>
				{/* Like/Dislike  */}
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
						{/* Tästä pitäs aueta comment form  */}
						<li>{props.user === null ? '' : <CommentForm id={post.id} />}</li>
						{auth.judgeDredd === true ? (
							<Button className='primary text-dark' onClick={() => props.purge(post.id)}>
								Purge
							</Button>
						) : null}
					</ul>
				</div>
				<div className='horizontalLineDown'></div>
				<br />
				<CommentList id={post.id} />
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
