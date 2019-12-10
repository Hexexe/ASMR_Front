import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import { updateProfile } from '../reducers/userReducer'
import { connect } from 'react-redux'
import { Modal, ModalBody } from 'reactstrap'

const Profile = props => {
	const id = props.id

	const user = JSON.parse(localStorage.getItem('currentUser'))

	const updateProfile = async e => {
		e.preventDefault()
		const formData = new FormData()

		formData.append('name', e.target.content.value)
		formData.append('avatar', e.target.file.files[0])
		formData.append('id', id)
		props.addComment(formData)
		e.target.content = ''
	}
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)

	return (
		<div>
			<img
				src={require('../images/avatars/wojak.png')}
				className=' '
				alt='kuva'
				width='64'
				height='64'
				onClick={toggle}
			/>
			<Modal isOpen={modal} toggle={toggle} className='surface textcolor '>
				<ModalBody className='surface'>
					<h1 className=''>Profile</h1>

					<form onSubmit={updateProfile} encType='multipart/form-data'>
						<div className='form-group row'>
							<label className='col-sm-2 col-form-label'>Name:</label>
							<div className='col-sm-10'>
								<input
									type='text'
									name='name'
									readOnly
									className='form-control-plaintext textcolor'
									value={`${user.username}`}
								></input>
							</div>
						</div>
						<div className='form-group row'>
							<label className='col-sm-2 col-form-label'>Avatar:</label>
							<div className='col-sm-10'>
								<img
									src={require('../images/avatars/wojak.png')}
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

						<div className='row'>
							<div className='column pl-3'>
								<img
									src={require('../images/icon1.png')}
									alt='male'
									width='64'
									height='64'
									name='avatar'
								></img>
							</div>

							<div className='column pl-5'>
								<img
									src={require('../images/icon2.png')}
									alt='female'
									width='64'
									height='64'
									name='avatar1'
								></img>
							</div>
						</div>

						<button>select</button>
						<button className='ml-5'>select</button>
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
		users: state.users
	}
}
const mapDispatchToProps = { updateProfile }
const ConnectedComments = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ConnectedComments
