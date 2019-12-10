import React from 'react'
import { logout } from '../reducers/authReducer'
import { connect } from 'react-redux'
import Profile from './Profile'

const LogoutForm = props => (
	<div>
		<nav className='navbar fixed-top navbar-expand-md surface'>
			<div className='collapse navbar-collapse' />
			<div className='btn-group'>
				<div className='navbar-nav'>
					<Profile />
					<button
						onClick={() => props.logout()}
						className='btn secondary btn-space-left'
					>
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
