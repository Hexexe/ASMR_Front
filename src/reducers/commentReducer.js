import commentService from '../services/comments'

export const addComment = a => {
	return async dispatch => {
		const newComment = await commentService.create(a)
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
	switch (state) {
		case 'NEW_COMMENT':
			console.log(action.data)
			return state.concat(action.data)
		case 'INIT_COMMENTS':
			return action.data
		default:
			return state
	}
}

export default commentReducer
