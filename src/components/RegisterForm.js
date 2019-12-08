import React, { useState } from 'react'
import { Button, Modal, ModalBody, Label } from 'reactstrap'
import { createUser } from '../reducers/userReducer'
import { connect } from 'react-redux'
import useForm from 'react-hook-form'

const RegisterForm = props => {
	/* 	const createUserN = async e => {
		e.preventDefault()
		const username = e.target.username.value
		const password = e.target.password.value
		e.target.username.value = ''
		e.target.password.value = ''
		props.createUser({ username, password })
	} */

	const createUser2 = async data => {
		const username = data.username
		const password = data.password
		props.createUser({ username, password })
		setModal(!modal)
	}

	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)
	const { register, handleSubmit, errors } = useForm()

	const onSubmit = data => {
		createUser2(data)
	}

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
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='surface border-dark form-group'
					>
						<label>Username</label>
						<input
							name='username'
							type='username'
							id='exampleEmail'
							placeholder='matti8'
							className='background border-dark form-control'
							ref={register({ required: true, minLength: 3 })}
						/>
						{errors.username && errors.username.type === 'required' && (
							<p className='error'>Username is required</p>
						)}
						{errors.username && errors.username.type === 'minLength' && (
							<p className='error'>Min length 3</p>
						)}
						<Label for='examplePassword'>Password</Label>
						<input
							name='password'
							type='password'
							id='examplePassword'
							placeholder='very secure password'
							className='background border-dark form-control'
							ref={register({ required: true, minLength: 3 })}
						/>
						{errors.password && errors.password.type === 'required' && (
							<p className='error'>Password is required</p>
						)}
						{errors.password && errors.password.type === 'minLength' && (
							<p className='error'>Your password is too weak</p>
						)}
						<label>Gender</label>
						<select className='form-control' id='exampleFormControlSelect1'>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
						<div className='form-group form-check'>
							<input
								name='checkbox'
								type='checkbox'
								className='form-check-input'
								id='exampleCheck1'
								ref={register({ required: true })}
							></input>

							<label className='form-check-label'>
								I agree to Terms of Service
							</label>
							{errors.checkbox && errors.checkbox.type === 'required' && (
								<p className='error'>You need to accept Terms of Service</p>
							)}
						</div>
						<Button className='primary' type='submit'>
							Register
						</Button>{' '}
						<Button className='secondary' onClick={toggle}>
							Cancel
						</Button>
					</form>
				</ModalBody>
			</Modal>
		</div>
	)
}
const mapDispatchToProps = { createUser }
const ConnectedReg = connect(null, mapDispatchToProps)(RegisterForm)
export default ConnectedReg
