import postService from '../services/posts'

const initialState = []

export const addPost = a => {
	return async dispatch => {
		const newPost = await postService.create(a)
		dispatch({
			type: 'NEW_POST',
			data: newPost
		})
	}
}
export const like = a => {
	return async dispatch => {
		const liked = await postService.update({ ...a, wp: a.wp + 1 })
		dispatch({
			type: 'LIKE',
			data: liked
		})
	}
}
export const dislike = a => {
	return async dispatch => {
		const disliked = await postService.update({ ...a, gtfo: a.gtfo + 1 })
		dispatch({
			type: 'DISLIKE',
			data: disliked
		})
	}
}
export const purge = a => {
	return async dispatch => {
		await postService.remove(a)
		dispatch({
			type: 'PURGE',
			data: a
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

export const addComment = fd => {
	return async dispatch => {
		const newComment = await postService.create(fd)
		dispatch({
			type: 'NEW_COMMENT',
			data: newComment
		})
	}
}

const postReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'NEW_POST': {
		return state.concat(action.data)
	}
	case 'INIT_POSTS': {
		return action.data
	}
	case 'LIKE': {
		const id = action.data.id
		const likedPost = state.find(n => n.id === id)
		const liked = { ...likedPost, wp: likedPost.wp + 1 }
		return state.map(p => (p.id !== id ? p : liked))
	}
	case 'DISLIKE': {
		const id = action.data.id
		const dislikedPost = state.find(n => n.id === id)
		const disliked = { ...dislikedPost, gtfo: dislikedPost.gtfo + 1 }
		return state.map(p => (p.id !== id ? p : disliked))
	}
	case 'NEW_COMMENT': {
		return state.concat(action.data)
	}
	case 'PURGE': {
		const index = state.findIndex(data => data.id === action.data.id)
		return [...state.slice(0, index), ...state.slice(index + 1)]
	}
	default: {
		return state
	}
	}
}

export default postReducer
