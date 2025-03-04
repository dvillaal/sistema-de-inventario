import { useState, useEffect } from 'react'
import Rol from './components/Rol'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import loginService from './services/login'

const App = () => {
  const [loginVisible] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [rol, setRol] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  useEffect(() => {
    const rolJSON = window.localStorage.getItem('rol')
    if (rolJSON) {
      const rol = JSON.parse(rolJSON)
      setRol(rol)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      window.localStorage.setItem('rol', JSON.stringify(user.rol))
      
      setUser(user)
      setRol(user.rol)

      setUsername('')
      setPassword('')
      
    } catch {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
    console.log('loggin in with', username, password)
  }

  const handleLogout = async () => {
    window.localStorage.removeItem('loggedUser')
    window.localStorage.removeItem('rol')

    setUser(null)
    setRol(null)
  }

  

  const loginForm = () => {
    const showWhenVisible = { display: loginVisible ? '' : 'none'}

    return (
      <div>
        <div style={showWhenVisible}>
          <LoginForm
            handleLogin={handleLogin}
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            />
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      
      <h1>Fenicias Online</h1>

      {user === null ?
        loginForm() 
        :
        <div>
          <Rol rol={rol}/>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      }

      <Notification message={errorMessage} className={'error-notification'}/>

    </div>
  )
}

export default App
