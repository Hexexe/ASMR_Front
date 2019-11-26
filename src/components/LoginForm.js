import React from 'react'
import PropTypes from 'prop-types'

const purgeReset = p => {
  // eslint-disable-next-line no-unused-vars
  const { reset, ...purged } = p
  return purged
}
const LoginForm = ({ handleLogin, username, password }) => (
  <>
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className='collapse navbar-collapse'>
        <form className='form-inline my-2 my-lg-0 navbar-nav ml-auto' onSubmit={handleLogin}>
          <div className='form-group mx-sm-0 mb-2'>
            <input
              className='form-control mr-sm-0'
              placeholder='username'
              {...purgeReset(username)}
            />
          </div>
          <div className='form-group mx-sm-1 mb-2'>
            <input
              className='form-control mr-sm-0'
              placeholder='username'
              {...purgeReset(password)}
            />
          </div>
          <button type='submit' className='btn btn-primary mb-2'>
            login
          </button>
        </form>
      </div>
    </nav>
  </>
)

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
}
export default LoginForm
