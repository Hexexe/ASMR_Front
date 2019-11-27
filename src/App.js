import React, { useState, useEffect } from 'react';
import { useField } from './hooks';
import Post from './components/Post';
import Notification from './components/Notification';
import PostForm from './components/PostForm';
import LoginForm from './components/LoginForm';
import Togglable from './components/Togglable';
import postService from './services/posts';
import loginService from './services/login';

const App = () => {
	const [posts, setPosts] = useState([]);
	const [message, setMessage] = useState(null);
	const [user, setUser] = useState(null);
	const title = useField('text');
	const content = useField('text');
	const username = useField('text');
	const password = useField('password');
	const postFormRef = React.createRef();

	useEffect(() => {
		postService.getAll().then(b => setPosts(b));
	}, []);
	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('currentUser');
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			setUser(user);
			postService.setToken(user.token);
		}
	}, []);

	const notification = m => {
		setMessage(m);
		setTimeout(() => {
			setMessage(null);
		}, 5000);
	};

	const handleLogin = async event => {
		event.preventDefault();
		try {
			const user = await loginService.login({
				username: username.value,
				password: password.value
			});
			window.localStorage.setItem('currentUser', JSON.stringify(user));
			postService.setToken(user.token);
			setUser(user);
			username.reset();
			password.reset();
		} catch (exception) {
			notification('wrong username or password');
		}
	};

	const addPost = async event => {
		event.preventDefault();
		try {
			postFormRef.current.toggleVisibility();
			const postObject = {
				title: title.value,
				content: content.value
			};
			const data = await postService.create(postObject);
			setPosts(posts.concat(data));
			title.reset();
			content.reset();
			notification('a new post added');
		} catch (e) {
			notification('Creation of a new post failed');
			title.reset();
			content.reset();
		}
	};

	const logout = () => {
		window.localStorage.removeItem('currentUser');
		setUser(null);
	};

	const loginForm = () => (
		<LoginForm
			handleLogin={handleLogin}
			username={username}
			password={password}
		/>
	);

	const logoutForm = () => (
		<>
		<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
			<div className='collapse navbar-collapse'></div>
			{user.name} logged in<button onClick={logout}>logout</button>
			</nav>
			</>
	)

	const renderLol = () => (
		<div>
			<h1>Posts</h1>
			<Togglable buttonLabel='New Post' ref={postFormRef}>
				<PostForm addPost={addPost} titleS={title} contentS={content} />
			</Togglable>
			{posts.map(post => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);

	return (
		<div>
			<Notification message={message} />
			{user === null ? loginForm() : logoutForm()}
		
		{renderLol()}
		</div>
	);
};
export default App;
