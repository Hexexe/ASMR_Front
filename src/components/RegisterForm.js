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

const RegisterForm = props => {
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
					<Form>
						<FormGroup>
							<Label for='exampleEmail'>Email</Label>
							<Input
								type='email'
								name='email'
								id='exampleEmail'
								placeholder='example@mail.com'
							/>
						</FormGroup>
						<FormGroup>
							<Label for='examplePassword'>Password</Label>
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
						<Button>Submit</Button>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color='primary' onClick={toggle}>
						Register
					</Button>{' '}
					<Button color='secondary' onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	)
}

export default RegisterForm
