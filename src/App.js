import React, { useState, useEffect } from 'react'
import { useField } from './hooks'
import { connect } from 'react-redux'
import { initializePosts } from './reducers/postReducer'
import { initializeComments } from './reducers/commentReducer'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import LoginForm from './components/LoginForm'
import postService from './services/posts'
import commentService from './services/comments'
import loginService from './services/login'
import Footer from './components/Footer'
import LogoutForm from './components/LogoutForm'

const App = props => {
	const [user, setUser] = useState(null)
	const username = useField('text')
	const password = useField('password')
	const postFormRef = React.createRef()

	useEffect(() => {
		props.initializePosts()
		props.initializeComments()
	}, [props])

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('currentUser')
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			postService.setToken(user.token)
			commentService.setToken(user.token)
		}
	}, [])

	const handleLogin = async event => {
		event.preventDefault()
		try {
			const user = await loginService.login({
				username: username.value,
				password: password.value
			})
			window.localStorage.setItem('currentUser', JSON.stringify(user))
			postService.setToken(user.token)
			commentService.setToken(user.token)
			setUser(user)
			username.reset()
			password.reset()
		} catch (exception) {
			console.log('lol')
		}
	}

	const logout = () => {
		window.localStorage.removeItem('currentUser')
		setUser(null)
	}

	//yaysdfsdf
	return (
		<div>
			{user === null ? (
				<LoginForm
					handleLogin={handleLogin}
					username={username}
					password={password}
				/>
			) : (
				<LogoutForm user={user} logout={logout}></LogoutForm>
			)}
			<br></br>
			<br></br>
			<img
				src={require('./images/logo.png')}
				className=''
				alt='kuva'
				width='100%'
			></img>
			<div className='mx-auto'>
				{user === null ? (
					<LoginForm
						handleLogin={handleLogin}
						username={username}
						password={password}
					/>
				) : (
					<>
						<PostForm />
					</>
				)}
				<h1>Posts</h1>
			</div>
			<PostList />
			<div className='row justify-content-center'></div>
			<Footer />
		</div>
	)
}
export default connect(null, { initializePosts, initializeComments })(App)
