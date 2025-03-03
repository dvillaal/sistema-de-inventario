import { useEffect } from "react"

const WorkerUpdateForm = ({ worker, handleSubmit, username, cedula, nombre, rol, turno, telefono, estado, handleUsernameChange, handleCedulaChange, handleNombreChange, handleRolChange, handleTurnoChange, handleTelefonoChange, handleEstadoChange, setUsername, setCedula, setNombreTrabajador, setRol, setTurno, setTelefono, setEstado }) => {
    console.log(worker.username)
    useEffect(() => {
        setUsername(worker.username)
        setCedula(worker.cedula)
        setNombreTrabajador(worker.nombre)
        setRol(worker.rol)
        setTurno(worker.turno)
        setTelefono(worker.telefono)
        setEstado(worker.estado)
    }, [setUsername, setCedula, setNombreTrabajador, setRol, setTurno, setTelefono, setEstado, worker.cedula, worker])

    return (

        <div className="form-container">
            <h2>Registro de trabajador</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cedula">cedula</label>
                    <input 
                        id="cedula"
                        className="form-control"
                        value={cedula}
                        onChange={handleCedulaChange}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">nombre</label>
                    <input 
                        id="nombreTrabajador"
                        className="form-control"
                        value={nombre}
                        onChange={handleNombreChange}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="rol">rol</label>
                    <select 
                        id="rol"
                        className="form-control"
                        value={rol}
                        onChange={handleRolChange}
                    >
                        <option value="" disabled></option>
                        <option value="Asesor">Asesor</option>
                        <option value="Bodeguero">Bodeguero</option>
                        <option value="Administrador">Administrador</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="turno">turno</label>
                    <input 
                        id="turno"
                        className="form-control"
                        value={turno}
                        onChange={handleTurnoChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">telefono</label>
                    <input 
                        id="telefono"
                        className="form-control"
                        value={telefono}
                        onChange={handleTelefonoChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="estado">estado</label>
                    <select 
                        id="estado"
                        className="form-control"
                        value={estado}
                        onChange={handleEstadoChange}
                    >
                        <option value="" disabled></option>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                </div>
                <button type="submit" className="btn">Guardar</button>
            </form>
        </div>
    )}

export default WorkerUpdateForm