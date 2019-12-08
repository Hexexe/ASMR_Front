import React from 'react'
//import PropTypes from 'prop-types'
import { addComment } from '../reducers/commentReducer'
import { connect } from 'react-redux'
import { Form } from 'reactstrap'
//sdf

const CommentForm = props => {
	const epicStyling = {
		width: '100%'
	}
	const id = props.id
	const addCommentN = async e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('content', e.target.content.value)
		formData.append('postImg', e.target.file.files[0])
		formData.append('id', id)
		props.addComment(formData)
		e.target.content.value = ''
	}

	return (
		<div>
			<Form onSubmit={addCommentN} encType='multipart/form-data'>
				<div>
					<label className='sr-only'>Content</label>
					<textarea
						className='card background textcolor border-dark'
						rows='3'
						placeholder='content'
						name='content'
						style={epicStyling}
					/>
					<input
						className='form-control col-form-label-lg surface border-dark'
						placeholder='file'
						name='file'
						type='file'
					/>
				</div>
				<button className='btn primary justify-content-end btn-space-top' type='submit'>
					Comment
				</button>
			</Form>
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
		posts: state.posts
	}
}
const mapDispatchToProps = { addComment }
const ConnectedComments = connect(mapStateToProps, mapDispatchToProps)(CommentForm)
export default ConnectedComments
