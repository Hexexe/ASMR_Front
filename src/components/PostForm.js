import React from 'react'
//import PropTypes from 'prop-types'
import { addPost } from '../reducers/postReducer'
import { connect } from 'react-redux'

const PostForm = props => {
	const addPostN = async e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('content', e.target.content.value)
		formData.append('postImg', e.target.file.files[0])
		props.addPost(formData)
		e.target.content.value = ''
		e.target.file.value = null
	}
	return (
		<div className='col-xl-6 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4'>
			<h2>Kvaak</h2>
			<form onSubmit={addPostN} className='justify-content-center' encType='multipart/form-data'>
				<div>
					<label className='sr-only'>Content</label>
					<textarea
						className='form-control inputfield surface border-dark'
						id='exampleFormControlTextarea1'
						rows='3'
						placeholder='content'
						name='content'
						type='text'
					/>
				</div>
				<label className='sr-only'>File</label>
				<input
					className='form-control col-form-label-lg surface border-dark'
					placeholder='file'
					name='file'
					type='file'
				/>
				<div className='d-flex justify-content-center'>
					<button type='submit' className='btn primary justify-content-end btn-space-top'>
						Publish
					</button>
				</div>
			</form>
		</div>
	)
}

/* PostForm.propTypes = {
	addPost: PropTypes.func.isRequired,
	titleS: PropTypes.object.isRequired,
	contentS: PropTypes.object.isRequired
} */
const mapStateToProps = state => {
	return {
		posts: state.posts
	}
}
const mapDispatchToProps = { addPost }
const ConnectedPosts = connect(mapStateToProps, mapDispatchToProps)(PostForm)
export default ConnectedPosts
