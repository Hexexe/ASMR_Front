import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import postReducer from './reducers/postReducer'
import authReducer from './reducers/authReducer'
import commentReducer from './reducers/commentReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
	posts: postReducer,
	auth: authReducer,
	comments: commentReducer,
	users: userReducer
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
