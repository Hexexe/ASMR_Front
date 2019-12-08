import commentService from '../services/comments'

export const addComment = fd => {
	return async dispatch => {
		const newComment = await commentService.create(fd)
		dispatch({
			type: 'NEW_COMMENT',
			data: newComment
		})
	}
}
export const initializeComments = () => {
	return async dispatch => {
		const comments = await commentService.getAll()
		dispatch({
			type: 'INIT_COMMENTS',
			data: comments
		})
	}
}
const commentReducer = (state = [], action) => {
	switch (action.type) {
		case 'NEW_COMMENT':
			return state.concat(action.data)
		case 'INIT_COMMENTS':
			return action.data
		default:
			return state
	}
}

export default commentReducer
