import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import { like, dislike, purge } from '../reducers/postReducer'
import { Button } from 'reactstrap'
const dateFormat = require('dateformat')

const Reply = props => {
	const users = props.users
	const post = props.post
	const auth = props.auth

	const usernamelol = (users, postid) => {
		const user = users.find(user => user.posts.find(post => post === postid))
		return user === undefined ? 'Anon' : user.username
	}
	return (
		<div>
			<div className='media surface mb-3 jumbotron' key={post.id}>
				<div className='media-body inline background testi2'>
					{/* Käyttäjän kuva */}

					{/* Käyttäjän nimi (anon jos tyhjä) */}
					<div clear='both'>
						<h4 className='media-heading commentControl'>
							{`${usernamelol(users, post.id)} replies `}

							<small className='text-muted'>
								{dateFormat(post.date, 'HH:MM - d.m.yy')}
							</small>
						</h4>
					</div>

					<br />
					{/* postauksen sisältö (jos kuva niin kuva myös)  */}
					<p className='commentControl'>{post.content}</p>
					{post.postImg === null ? null : (
						<img
							className='mb-3 imageStyling'
							src={post.postImg.url}
							alt='kuva'
						/>
					)}
					{/* päiväys  */}

					{/* Like/Dislike  */}

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
					<div
						className='btn-group ml-3'
						role='group'
						aria-label='Basic example'
					>
						{props.user === null ? '' : <CommentForm id={post.id} />}
						{auth.judgeDredd === true ? (
							<button
								className='btn primary text-dark ml-3 mt-1'
								onClick={() => props.purge(post)}
							>
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
