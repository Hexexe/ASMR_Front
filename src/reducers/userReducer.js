import UserService from '../services/users'

const initialState = []

export const createUser = a => {
	return async dispatch => {
		const newUser = await UserService.register(a)
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
		const user = await UserService.update(a)
		dispatch({
			type: 'UP',
			data: user
		})
	}
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'NEW_USER':
			return state.concat(action.data)
		case 'INIT_U':
			return action.data
		case 'UP': {
			const id = action.data.id
			const upUser = state.find(n => n.id === id)
			const updated = { ...upUser, avatar: upUser.avatar }
			return state.map(p => (p.id !== id ? p : updated))
		}
		default:
			return state
	}
}
export default userReducer
