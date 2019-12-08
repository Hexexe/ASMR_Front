import React, { useState } from 'react'
import {
	Button,
	Modal,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap'
import { createUser } from '../reducers/userReducer'
import { connect } from 'react-redux'

const RegisterForm = props => {
	const createUserN = async e => {
		e.preventDefault()
		const username = e.target.username.value
		const password = e.target.password.value
		e.target.username.value = ''
		e.target.password.value = ''
		props.createUser({ username, password })
	}

	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)

	return (
		<div>
			<Button className='primary text-dark' onClick={toggle}>
				Register
			</Button>
			<Modal
				isOpen={modal}
				toggle={toggle}
				className='surface textcolor border-dark'
			>
				<ModalBody className='surface'>
					<Form onSubmit={createUserN} className='surface border-dark'>
						<FormGroup>
							<Label for='exampleEmail'>Username</Label>
							<Input
								type='username'
								name='username'
								id='exampleEmail'
								placeholder='matti8'
								className='background border-dark'
							/>
						</FormGroup>
						<FormGroup>
							<Label for='examplePassword'>Password</Label>
							<Input
								type='password'
								name='password'
								id='examplePassword'
								placeholder='very secure password'
								className='background border-dark'
							/>
						</FormGroup>
						<FormGroup>
							<Label for='exampleSelect'>Gender</Label>
							<Input
								type='select'
								name='select'
								id='exampleSelect'
								className='background border-dark'
							>
								<option>Male</option>
								<option>Female</option>
								<option>Apache</option>
							</Input>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type='checkbox' className='background border-dark' /> I
								agree to the terms of service
							</Label>
						</FormGroup>
						<Button className='primary' type='submit' onClick={toggle}>
							Register
						</Button>{' '}
						<Button className='secondary' onClick={toggle}>
							Cancel
						</Button>
					</Form>
				</ModalBody>
			</Modal>
		</div>
	)
}
const mapDispatchToProps = { createUser }
const ConnectedReg = connect(null, mapDispatchToProps)(RegisterForm)
export default ConnectedReg
