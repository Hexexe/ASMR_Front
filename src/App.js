import React, { useState, useEffect } from 'react'
import { useField } from './hooks'
import { connect } from 'react-redux'
import { initializePosts } from './reducers/postReducer'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import postService from './services/posts'
import loginService from './services/login'
import Footer from './components/Footer'

const App = props => {
	const [user, setUser] = useState(null)
	const username = useField('text')
	const password = useField('password')
	const postFormRef = React.createRef()

	useEffect(() => {
		props.initializePosts()
	}, [props])

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('currentUser')
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			postService.setToken(user.token)
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

	const loginForm = () => (
		<LoginForm handleLogin={handleLogin} username={username} password={password} />
	)

	const logoutForm = () => (
		<div>
			<nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
				<div className="collapse navbar-collapse"></div>
				<p className="mb-2">
					<b>{user.name} </b>logged in{' '}
				</p>
				<button onClick={logout} className="btn btn-danger mb-2">
					logout
				</button>
			</nav>
		</div>
	)

	return (
		<div>
			{user === null ? loginForm() : logoutForm()}
			<br></br>
			<br></br>
			<br></br>
			<h1>Posts</h1>
			<div className="col-md-4 col-md-offset-4 mx-auto">
				<Togglable buttonLabel="New Post" ref={postFormRef}>
					<PostForm />
				</Togglable>
				<PostList />
			</div>

			<div className="row justify-content-center"></div>
			<Footer />
		</div>
	)
}
export default connect(null, { initializePosts })(App)
