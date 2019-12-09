import React from 'react'
import { logout } from '../reducers/authReducer'
import { connect } from 'react-redux'

const LogoutForm = props => (
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
					<b>{props.auth.username} </b>logged in
				</button>
				<div className='dropdown-menu dropdown-menu-right mb-2 surface'>
					<button onClick={() => props.logout()} className='btn secondary btn-space-left'>
						logout
					</button>
				</div>
			</div>
		</nav>
	</div>
)

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}
const mapDispatchToProps = { logout }
const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LogoutForm)
export default ConnectedLogin
