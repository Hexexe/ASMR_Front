import React from 'react'
//import PropTypes from 'prop-types'
import { addComment } from '../reducers/commentReducer'
import { connect } from 'react-redux'

const CommentForm = props => {
	const id = props.id
	const addCommentN = async e => {
		e.preventDefault()
		const content = e.target.content.value
		e.target.content.value = ''
		props.addComment({ id, content })
	}

	return (
		<div>
			<form onSubmit={addCommentN}>
				<div>
					Your reply:
					<input name="content" />
				</div>
				<button className="btn btn-primary" type="submit">
					Comment
				</button>
			</form>
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
