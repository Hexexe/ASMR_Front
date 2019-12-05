import postService from '../services/posts'

export const addPost = a => {
	return async dispatch => {
		const newPost = await postService.create(a)
		dispatch({
			type: 'NEW_POST',
			data: newPost
		})
	}
}
export const initializePosts = () => {
	return async dispatch => {
		const posts = await postService.getAll()
		dispatch({
			type: 'INIT_POSTS',
			data: posts
		})
	}
}
const postReducer = (state = [], action) => {
	switch (action.type) {
		case 'NEW_POST':
			return state
				.concat(action.data)
				.sort()
				.reverse()
		case 'INIT_POSTS':
			return action.data.sort().reverse()
		default:
			return state
	}
}

export default postReducer
