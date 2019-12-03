import React from 'react'
import PropTypes from 'prop-types'
import RegisterForm from './RegisterForm'

const purgeReset = p => {
	// eslint-disable-next-line no-unused-vars
	const { reset, ...purged } = p
	return purged
}

const LoginForm = ({ handleLogin, username, password }) => (
	<nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
		<button
			className="navbar-toggler navbar-toggler-right"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNavAltMarkup"
			aria-controls="navbarNavAltMarkup"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="container">
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					<form className="form-inline " onSubmit={handleLogin}>
						<div className="form-row">
							<div className="col">
								<input
									className="form-control mr-sm-0 "
									placeholder="username"
									{...purgeReset(username)}
								/>
							</div>
							<div className="col">
								<input
									className="form-control mr-sm-0"
									placeholder="username"
									{...purgeReset(password)}
								/>
							</div>
							<div className="col">
								<button type="submit" className="btn btn-primary">
									login
								</button>
							</div>
							<div className="col"></div>
						</div>
					</form>
					<RegisterForm />
				</div>
			</div>
		</div>
	</nav>
)

LoginForm.propTypes = {
	handleLogin: PropTypes.func.isRequired,
	username: PropTypes.object.isRequired,
	password: PropTypes.object.isRequired
}
export default LoginForm
