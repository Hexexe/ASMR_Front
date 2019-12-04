import axios from 'axios'
const usersC = '/api/users'
const loginC = '/api/login'

const getAllUsers = async () => {
	const response = await axios.get(usersC)
	return response.data
}
const register = async newUser => {
	const response = await axios.post(usersC, newUser)
	return response.data
}
const login = async credentials => {
	const response = await axios.post(loginC, credentials)
	return response.data
}

export default { getAllUsers, register, login }
