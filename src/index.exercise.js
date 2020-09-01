import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

function LoginForm({onSubmit, btnText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>

      <button type="submit">{btnText}</button>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = useState('none')

  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo />
      <h1>Bookshelf</h1>
      <button onClick={() => setOpenModal('login')}>Login</button>
      <button onClick={() => setOpenModal('register')}>Register</button>

      <Dialog aria-label="Login Form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={login} btnText="Login"></LoginForm>
      </Dialog>

      <Dialog aria-label="Registration Form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={register} btnText="Register"></LoginForm>
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
