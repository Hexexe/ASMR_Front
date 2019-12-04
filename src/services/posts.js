import axios from 'axios'
const baseUrl = '/api/posts'

let token = null
const setToken = newToken => {
	token = `bearer ${newToken}`
}

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const create = async newObject => {
	const config = { headers: { Authorization: token } }
	const response = await axios.post(baseUrl, newObject, config)
	return response.data
}
const remove = async id => {
	const promise = await axios.delete(`${baseUrl}/${id}`)
	return promise.then(response => response.data)
}
const replace = async person => {
	const promise = await axios.put(`${baseUrl}/${person.id}`, person)
	return promise.then(response => response.data)
}
export default { getAll, create, remove, replace, setToken }
