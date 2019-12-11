import UserService from '../services/users'

export const createUser = a => {
	return async dispatch => {
		const newUser = await UserService.register(a)
		dispatch({
			type: 'NEW_USER',
			data: newUser
		})
	}
}

export const updateProfile = () => {
	return async dispatch => {
		const users = await UserService.getAllUsers()
		dispatch({
			type: 'UP',
			data: users
		})
	}
}
export const initializeUsers = () => {
	return async dispatch => {
		const users = await UserService.getAllUsers()
		dispatch({
			type: 'INIT_U',
			data: users
		})
	}
}

export const updateProfileTest = data => {
	return async dispatch => {
		const users = await UserService.update(data)
		dispatch({
			type: 'UPTEST',
			data: users
		})
	}
}

const userReducer = (state = [], action) => {
	switch (action.type) {
		case 'NEW_USER':
			return state.concat(action.data)
		case 'INIT_U':
			return action.data
		case 'UP':
			return action.data
		case 'UPTEST':
			return action.data
		default:
			return state
	}
}
export default userReducer
