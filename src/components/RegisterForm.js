import React, { useState } from 'react'
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap'
import { createUser } from '../reducers/registerReducer'

const RegisterForm = props => {
	const createUsern = async e => {
		e.preventDefault()

		const username = e.target.username.value
		const password = e.target.password.value
		e.target.username.value = ''
		e.target.password.value = ''
		console.log('lmao')
		props.createUser({ username, password })
	}

	const { className } = props

	const [modal, setModal] = useState(false)

	const toggle = () => setModal(!modal)

	return (
		<div>
			<Button color='primary' onClick={toggle}>
				Register
			</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader className='text-muted' toggle={toggle}>
					Register
				</ModalHeader>
				<ModalBody className='text-muted'>
					<Form onSubmit={createUsern}>
						<FormGroup>
							<Label for='exampleEmail'>
								<b>Usernamea</b>
							</Label>
							<Input
								type='username'
								name='username'
								id='exampleEmail'
								placeholder='matti8'
							/>
						</FormGroup>
						<FormGroup>
							<Label for='examplePassword'>
								<b>Password</b>
							</Label>
							<Input
								type='password'
								name='password'
								id='examplePassword'
								placeholder='very secure password'
							/>
						</FormGroup>
						<FormGroup>
							<Label for='exampleSelect'>Gender</Label>
							<Input type='select' name='select' id='exampleSelect'>
								<option>Male</option>
								<option>Female</option>
								<option>Apache</option>
							</Input>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type='checkbox' /> I agree to the terms of service
							</Label>
						</FormGroup>
						<Button color='primary' type='submit'>
							Register
						</Button>{' '}
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color='secondary' onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	)
}

export default RegisterForm
