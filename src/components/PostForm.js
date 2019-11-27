import React from 'react'
import PropTypes from 'prop-types'

const purgeReset = p => {
	// eslint-disable-next-line no-unused-vars
	const { reset, ...purged } = p
	return purged
}
const postForm = ({ addPost, titleS, contentS }) => (
	<div>
		<h2>Kvaak</h2>
		<form onSubmit={addPost}>
			<div className='form-group'>
				<label className='sr-only'>Title</label>
				<input
					className='form-control col-form-label-lg'
					{...purgeReset(titleS)}
					placeholder='title'
				/>
			</div>
			<div>
				<label className='sr-only'>Content</label>
				<textarea
					className='form-control'
					id='exampleFormControlTextarea1'
					rows='3'
					{...purgeReset(contentS)}
					placeholder='content'
				></textarea>
			</div>
			<div className='d-flex justify-content-end'>
				<button
					type='submit'
					className='btn btn-primary d-flex justify-content-end'
				>
					Publish
				</button>
			</div>
		</form>
	</div>
)

postForm.propTypes = {
	addPost: PropTypes.func.isRequired,
	titleS: PropTypes.object.isRequired,
	contentS: PropTypes.object.isRequired
}
export default postForm
