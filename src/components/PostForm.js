import React from 'react'
//import PropTypes from 'prop-types'
import { addPost } from '../reducers/postReducer'
import { connect } from 'react-redux'

const PostForm = props => {
	const addPostN = async e => {
		e.preventDefault()
		const title = e.target.title.value
		const content = e.target.content.value
		e.target.title.value = ''
		e.target.content.value = ''
		props.addPost({ title, content })
	}
	return (
		<div>
			<h2>Kvaak</h2>
			<form onSubmit={addPostN}>
				<div className="form-group">
					<label className="sr-only">Title</label>
					<input className="form-control col-form-label-lg" placeholder="title" name="title" />
				</div>
				<div>
					<label className="sr-only">Content</label>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						placeholder="content"
						name="content"
					/>
				</div>
				<div className="d-flex justify-content-end">
					<button type="submit" className="btn btn-primary d-flex justify-content-end">
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
const mapDispatchToProps = { addPost }
const ConnectedPosts = connect(null, mapDispatchToProps)(PostForm)
export default ConnectedPosts
