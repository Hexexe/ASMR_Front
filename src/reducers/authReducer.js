import postService from '../services/posts'
import loginService from '../services/users'

const initialState = {
	token: null,
	username: null,
	name: '',
	judgeDredd: false,
	id: null
}

export const logout = () => {
	return dispatch => {
		dispatch({
			type: 'LOGOUT'
		})
	}
}

export const handleLogin = a => {
	return async dispatch => {
		const user = await loginService.login({
			username: a.username,
			password: a.password
		})
		dispatch({
			type: 'LOGIN',
			data: user
		})
	}
}
export const checkUser = () => {
	return async dispatch => {
		dispatch({
			type: 'CHECKU'
		})
	}
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN': {
			localStorage.setItem('currentUser', JSON.stringify(action.data))
			postService.setToken(action.data.token)
			loginService.setToken(action.data.token)
			return { ...state, ...action.data }
		}
		case 'LOGOUT': {
			localStorage.removeItem('currentUser')
			postService.setToken(null)
			loginService.setToken(null)
			return { ...state, ...initialState }
		}
		case 'CHECKU': {
			const pState = JSON.parse(localStorage.getItem('currentUser'))
			if (pState) {
				postService.setToken(pState.token)
				loginService.setToken(pState.token)
				return pState
			} else {
				return initialState
			}
		}
		default:
			return state
	}
}

export default authReducer
