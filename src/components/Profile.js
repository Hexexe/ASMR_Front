import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import { updateProfile } from '../reducers/userReducer'
import { connect } from 'react-redux'
import { Form } from 'reactstrap'
import { Button, Modal, ModalBody, Input, Label } from 'reactstrap'

const Profile = props => {
	const epicStyling = {
		width: '100%'
	}
	const id = props.id
	const users = props.users

	const updateProfile = async e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('name', e.target.content.value)
		formData.append('avatar', e.target.file.files[0])
		formData.append('id', id)
		props.addComment(formData)
		e.target.content.value = ''
	}
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)

	return (
		<div>
			<img
				src={require('../images/avatars/wojak.png')}
				className=' imagetoRight '
				alt='kuva'
				width='64'
				height='64'
				onClick={toggle}
			/>
			<Modal isOpen={modal} toggle={toggle} className='surface textcolor border-dark customForm'>
				<ModalBody className='surface'>
					<Form onSubmit={updateProfile} encType='multipart/form-data'>
						<div>
							<img
								src={require('../images/avatars/wojak.png')}
								alt='kuva'
								width='64'
								height='64'
								onClick={toggle}
							/>
							<Label className='sr-only'>Name</Label>
							<Input
								className='form-control col-form-label-lg surface border-dark'
								placeholder='name (if empty = anon'
								name='name'
								type='text'
							/>
						</div>
						<Button
							className='btn primary justify-content-end btn-space-top'
							type='submit'
							onClick={toggle}
						>
							ok
						</Button>
					</Form>
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
