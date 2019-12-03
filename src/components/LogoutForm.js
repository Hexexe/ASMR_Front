import React from 'react'

const LogoutForm = ({ user, logout }) => (
	<div>
		<nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
			<div className="collapse navbar-collapse"></div>

			<p className="mb-2">
				<b>{user.name} </b>logged in{' '}
			</p>
			<button onClick={logout} className="btn btn-danger mb-2 btn-space-left">
				logout
			</button>
		</nav>
	</div>
)

export default LogoutForm
