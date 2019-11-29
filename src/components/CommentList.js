import React from 'react'
import { connect } from 'react-redux'

const postFormRef = React.createRef()
const epicStyling = {
	width: '55rem'
}

const CommentList = props => {
	const comments = props.comments
	return (
		<div>
			{comments.map(comment => (
				<div className="card text-white bg-dark mb-3 mx-auto " style={epicStyling} key={comment.id}>
					<p className="card-body">{comment.content}</p>
				</div>
			))}
		</div>
	)
}
const mapStateToProps = state => {
	return {
		comments: state.comments
	}
}
//const mapDispatchToProps = { setNotification, vote }
const ConnectedComments = connect(mapStateToProps)(CommentList)
export default ConnectedComments
