import React from 'react'
import PropTypes from 'prop-types'

const purgeReset = p => {
	// eslint-disable-next-line no-unused-vars
	const { reset, ...purged } = p
	return purged
}
const commentForm = ({}) => (
	<div>
		<form>
			<div>
				Your reply:
				<input />
			</div>
			<button className='btn btn-primary' type='submit'>
				Comment
			</button>
		</form>
	</div>
)

commentForm.propTypes = {
	addPost: PropTypes.func.isRequired,
	titleS: PropTypes.object.isRequired,
	contentS: PropTypes.object.isRequired
}
export default commentForm
