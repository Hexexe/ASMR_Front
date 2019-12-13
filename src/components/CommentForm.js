import React, { useState } from 'react'
import { addComment } from '../reducers/postReducer'
import { connect } from 'react-redux'
import { Form } from 'reactstrap'
import { Button, Modal, ModalBody, Input, Label } from 'reactstrap'

const CommentForm = props => {
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)
	const id = props.id
	const epicStyling = {
		width: '100%'
	}

	const addCommentN = async e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('content', e.target.content.value)
		formData.append('postImg', e.target.file.files[0])
		formData.append('id', id)
		props.addComment(formData)
		e.target.content.value = ''
		e.target.file.value = null
	}

	return (
		<div>
			<button type='button' className='btn primary text-dark mt-3' onClick={toggle}>
				Reply
			</button>
			<Modal isOpen={modal} toggle={toggle} className='surface textcolor border-dark customForm'>
				<ModalBody className='surface'>
					<Form onSubmit={addCommentN} encType='multipart/form-data'>
						<div>
							<h1>Reply</h1>
							<Label className='sr-only'>Content</Label>
							<textarea
								className='card background textcolor border-dark'
								rows='3'
								placeholder='content'
								name='content'
								style={epicStyling}
							/>
							<Input
								className='form-control col-form-label-lg surface border-dark'
								placeholder='file'
								name='file'
								type='file'
							/>
						</div>
						<Button
							className='btn primary justify-content-end btn-space-top'
							type='submit'
							onClick={toggle}
						>
							Comment
						</Button>
					</Form>
				</ModalBody>
			</Modal>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		posts: state.posts
	}
}
const mapDispatchToProps = { addComment }
const ConnectedComments = connect(mapStateToProps, mapDispatchToProps)(CommentForm)
export default ConnectedComments
