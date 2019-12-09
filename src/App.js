import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializePosts } from './reducers/postReducer'
import { initializeComments } from './reducers/commentReducer'
import { initializeUsers } from './reducers/userReducer'
import { checkUser } from './reducers/authReducer'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import LogoutForm from './components/LogoutForm'
import CookieConsent from 'react-cookie-consent'

const App = props => {
	useEffect(() => {
		props.checkUser()
		props.initializeUsers()
		props.initializePosts()
		props.initializeComments()
	}, [props.posts.length, props.comments.length])

	//yaysdfsdf
	return (
		<div className='textcolor'>
			{props.auth.username === null ? <LoginForm /> : <LogoutForm />}
			<br></br>
			<br></br>
			<img
				src={require('./images/logo.png')}
				className=''
				alt='kuva'
				width='100%'
			></img>
			<div className='mx-auto'>
				{props.auth.username === null ? <LoginForm /> : <PostForm />}
				<h1>Posts</h1>
			</div>
			<PostList />
			<div className='row justify-content-center'></div>
			<CookieConsent
				location='bottom'
				buttonText='Yes, I understand'
				buttonStyle={{ background: '#bb86fc', color: 'white' }}
			>
				In order to optimize the website and to continuously improve ASMR, we
				collect your data.{' '}
			</CookieConsent>
			<Footer />
		</div>
	)
}
const mapStateToProps = state => ({
	posts: state.posts,
	comments: state.comments,
	auth: state.auth
})
const mapDispatchToProps = {
	initializeComments,
	initializePosts,
	initializeUsers,
	checkUser
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
