import postService from '../services/posts'

const initialState = {
	token: localStorage.getItem('currentUser'),
	isAuth: null,
	isLoading: false,
	user: null
}
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'USER_LOADING':
			return { ...state, isLoading: true }
		case 'USER_LOADED':
			return { ...state, isAuth: true, isLoading: false, user: action.payload }
		case 'LOGIN_SUCCESS':
		case 'REGISTER_SUCCESS':
			return { ...state, ...action.payload, isAuth: true, isLoading: false }
		case 'AUTH_ERROR':
		case 'LOGIN_FAIL':
		case 'LOGOUT_SUCCESS':
		case 'REGISTER_FAIL':
			return { ...state, token: null, user: null, isAuth: false, isLoading: false }
		default:
			return state
	}
}

export default authReducer
