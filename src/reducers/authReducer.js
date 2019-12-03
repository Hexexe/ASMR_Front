//import postService from '../services/posts'

const initialState = {
	token: localStorage.getItem('currentUser'),
	isAuth: null,
	isLoading: false,
	user: null
}
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default authReducer
