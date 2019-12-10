import axios from 'axios'
const usersC = '/api/users'
const loginC = '/api/login'

let token = null
const setToken = newToken => {
	token = `bearer ${newToken}`
}

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
const remove = async id => {
	const promise = await axios.delete(`${usersC}/${id}`)
	return promise.then(response => response.data)
}
const update = async post => {
	const config = { headers: { Authorization: token } }
	const response = await axios.put(`${usersC}/${post.id}`, post, config)
	return response.data
}

export default { getAllUsers, register, login, update, remove, setToken }
