import registerService from '../services/register'

export const createUser = a => {
	return async dispatch => {
		const newUser = await registerService.register(a)
		dispatch({
			type: 'NEW_USER',
			data: newUser
		})
	}
}

const registerReducer = (state = [], action) => {
	switch (action.type) {
		case 'NEW_USER':
			return state.concat(action.data)
		default:
			return state
	}
}
export default registerReducer
