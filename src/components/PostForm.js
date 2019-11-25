import React from 'react'
import PropTypes from 'prop-types'

const purgeReset = p => {
	// eslint-disable-next-line no-unused-vars
	const { reset, ...purged } = p
	return purged
}
const postForm = ({ addPost, titleS, contentS }) => (
	<div>
		<h1>Create new</h1>
		<form onSubmit={addPost}>
			<div>
				Title:
				<input {...purgeReset(titleS)} />
			</div>
			<div>
				Content:
				<input {...purgeReset(contentS)} />
			</div>
			<button type="submit">Create</button>
		</form>
	</div>
)

postForm.propTypes = {
	addPost: PropTypes.func.isRequired,
	titleS: PropTypes.object.isRequired,
	contentS: PropTypes.object.isRequired
}
export default postForm
