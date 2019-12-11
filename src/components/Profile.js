import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import { updateProfileTest } from '../reducers/userReducer'
import { checkUser } from '../reducers/authReducer'
import { connect } from 'react-redux'
import { Modal, ModalBody } from 'reactstrap'

const Profile = props => {
	const users = props.users
	const user = JSON.parse(localStorage.getItem('currentUser'))
	const currentUser = users ? users.find(u => (u.id = user.id)) : null

	const updateTest = async e => {
		e.preventDefault()
		const name = e.target.name.value
		currentUser.name = name
		props.updateProfileTest(currentUser)
		e.target.name.value = ''
	}

	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)

	const usernamelol = (users, postid) => {
		const user = users.find(user => user.posts.find(post => post === postid))
		return user === undefined || user.name.length === 0 ? 'Anon' : user.name
	}

	const current = (users, postid) => {
		const user = users.find(user => user.posts.find(post => post === postid))
		return user === undefined || user.name.length === 0 ? 'Anon' : user.name
	}

	//console.log('haha', user.id)

	return (
		<div>
			<img
				src={
					user.name === null ? require(`${user.avatar}`) : require('../images/avatars/wojak.png')
				}
				className=' '
				alt='kuva'
				width='64'
				height='64'
				onClick={toggle}
			/>
			<Modal isOpen={modal} toggle={toggle} className='surface textcolor '>
				<ModalBody className='surface'>
					<h1 className=''>Profile</h1>

					<form onSubmit={updateTest} encType='multipart/form-data'>
						<div className='form-group row'>
							<label className='col-sm-2 col-form-label'>Username:</label>
							<div className='col-sm-10'>
								<input
									type='text'
									name='username'
									readOnly
									className='form-control-plaintext textcolor'
									value={`${user.username}`}
								></input>
							</div>
						</div>
						<div className='form-group row'>
							<label className='col-sm-2 col-form-label'>Name:</label>
							<div className='col-sm-10'>
								<input
									type='text'
									className='form-control textcolor'
									defaultValue={usernamelol(users)}
									name='name'
								></input>
							</div>
						</div>
						<div className='form-group row'>
							<label className='col-sm-2 col-form-label'>Avatar:</label>
							<div className='col-sm-10'>
								<img
									src={
										user.name === null
											? require(`${user.avatar}`)
											: require('../images/avatars/wojak.png')
									}
									className=' '
									alt='kuva'
									width='64'
									height='64'
									onClick={toggle}
								/>
							</div>
						</div>
						<div className='form-group row'>
							<label className='pl-3'>Change your avatar:</label>
							<div className=''></div>
						</div>

						<div className='row ml-2'>
							<label>
								<input type='radio' name='test' value='small'></input>
								<img
									src={require('../images/icon1.png')}
									alt='male'
									width='64'
									height='64'
									name='file'
									type='file'
									value={require('../images/icon1.png')}
								></img>
							</label>

							<label>
								<input type='radio' name='test' value='big'></input>
								<img
									src={require('../images/icon2.png')}
									alt='female'
									width='64'
									height='64'
									name='avatar1'
									value='../images/icon2.png'
								></img>
							</label>
						</div>
						<button className='primary' type='submit'>
							Submit
						</button>
					</form>
				</ModalBody>
			</Modal>
		</div>
	)
}

/* commentForm.propTypes = {
	addPost: PropTypes.func.isRequired,
	titleS: PropTypes.object.isRequired,
	contentS: PropTypes.object.isRequired
} */
const mapStateToProps = state => {
	return {
		users: state.users,
		auth: state.auth
	}
}
const mapDispatchToProps = { updateProfileTest, checkUser }
const ConnectedComments = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ConnectedComments
