import postService from '../services/posts'

export const addPost = a => {
	console.log(a)
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
		case 'NEW_POST': {
			return state
				.concat(action.data)
				.sort()
				.reverse()
		}
		case 'INIT_POSTS': {
			return action.data.sort().reverse()
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
		default:
			return state
	}
}

export default postReducer
