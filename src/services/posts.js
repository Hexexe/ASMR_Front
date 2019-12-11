import axios from 'axios'
const posts = '/api/posts'

let token = null
const setToken = newToken => {
	token = `bearer ${newToken}`
}

const getAll = async () => {
	const response = await axios.get(posts)
	return response.data
}

const create = async newObject => {
	const config = { headers: { Authorization: token } }
	const response = await axios.post(posts, newObject, config)
	return response.data
}
const remove = async post => {
	const postId = post.postImg === null ? null : post.postImg.imgId
	const config = { headers: { Authorization: token }, data: { postId } }
	const response = await axios.delete(`${posts}/${post.id}`, config)
	return response.data
}
const update = async post => {
	const config = { headers: { Authorization: token } }
	const response = await axios.put(`${posts}/${post.id}`, post, config)
	return response.data
}
export default { getAll, create, remove, update, setToken }
