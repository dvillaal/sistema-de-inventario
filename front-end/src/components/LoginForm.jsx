const LoginForm = ({ handleLogin, username, password, handleUsernameChange, handlePasswordChange}) => (
    <div className="login-container">
        <div className="login-form">
            <h2 className="login-header">Iniciar sesión</h2>

            <form onSubmit={handleLogin}>
                <div className="form-group">
                <label htmlFor="username">Usuario</label>
                    <input
                    id = "username"
                    className="form-control"
                    type="text"
                    value={username}
                    name="Username"
                    onChange={handleUsernameChange}
                    />
                </div>
                <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                    <input 
                    id="password"
                    className="form-control"
                    type="password"
                    value={password}
                    name="Password"
                    onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit" className="login-button">Iniciar Sesión</button>
            </form>
        </div>
    </div>
)

export default LoginForm