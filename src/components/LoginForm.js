import React from 'react'
import RegisterForm from './RegisterForm'
import { handleLogin } from '../reducers/authReducer'
import { connect } from 'react-redux'

const LoginForm = props => {
	const handleLoginN = async e => {
		e.preventDefault()
		const username = e.target.username.value
		const password = e.target.password.value
		props.handleLogin({ username, password })
		e.target.username.value = ''
		e.target.password.value = ''
	}

	return (
		<nav className='navbar fixed-top navbar-expand-md surface'>
			<button
				className='navbar-toggler navbar-toggler-right'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavAltMarkup'
				aria-controls='navbarNavAltMarkup'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='container'>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav ml-auto'>
						<form className='form-inline ' onSubmit={handleLoginN}>
							<div className='form-row'>
								<div className='col'>
									<input className='form-control mr-sm-0 ' placeholder='username' name='username' />
								</div>
								<div className='col'>
									<input
										className='form-control mr-sm-0'
										type='password'
										placeholder='password'
										name='password'
									/>
								</div>
								<div className='col'>
									<button type='submit' className='btn primary'>
										login
									</button>
								</div>
								<div className='col'></div>
							</div>
						</form>
						<RegisterForm />
					</div>
				</div>
			</div>
		</nav>
	)
}
/* LoginForm.propTypes = {
	handleLogin: PropTypes.func.isRequired,
	username: PropTypes.object.isRequired,
	password: PropTypes.object.isRequired
} */
const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}
const mapDispatchToProps = { handleLogin }
const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default ConnectedLogin
