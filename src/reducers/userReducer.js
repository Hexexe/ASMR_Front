import UserService from '../services/users'

export const createUser = a => {
	return async dispatch => {
		const newUser = await UserService.register(a)
		console.log(a)
		dispatch({
			type: 'NEW_USER',
			data: newUser
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

export const updateProfile = a => {
	return async dispatch => {
		const users = await UserService.update(a)
		dispatch({
			type: 'UP',
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
		default:
			return state
	}
}
export default userReducer
