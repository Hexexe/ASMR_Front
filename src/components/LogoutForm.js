import React from 'react'

const LogoutForm = ({ user, logout }) => (
	<div>
		<nav className='navbar fixed-top navbar-expand-md surface'>
			<div className='collapse navbar-collapse'></div>

			<div className='btn-group'>
				<button
					type='button'
					className='btn secondary dropdown-toggle'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'
				>
					<b>{user.username} </b>logged in
				</button>
				<div className='dropdown-menu dropdown-menu-right mb-2 surface'>
					<button onClick={logout} className='btn secondary btn-space-left'>
						logout
					</button>
				</div>
			</div>
		</nav>
	</div>
)

export default LogoutForm
