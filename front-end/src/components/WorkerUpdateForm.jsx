import { useEffect, useState } from "react"
import workerService from '../services/workers'
import Notification from './Notification'

const WorkerUpdateForm = ({ worker, handleSubmit }) => {

    const [username, setUsername] = useState('')
    const [cedula, setCedula] = useState('')
    const [nombre, setNombre] = useState('')
    const [rol, setRol] = useState('')
    const [turno, setTurno] = useState('')
    const [telefono, setTelefono] = useState('')
    const [estado, setEstado] = useState('')

    const [messageNotification, setMessageNotification] = useState(null)
    const [classNotification, setClassNotification] = useState(null)

    useEffect(() => {
        setUsername(worker.username)
        setCedula(worker.cedula)
        setNombre(worker.nombre)
        setRol(worker.rol)
        setTurno(worker.turno)
        setTelefono(worker.telefono)
        setEstado(worker.estado)
    }, [worker])

    console.log(worker.passwordHash)

    const updateWorker = async (event, workerToUpdate) => {
        try {
            event.preventDefault()

            const changedWorker = {
                ...workerToUpdate,
                username: username,
                cedula: cedula,
                nombre: nombre,
                rol: rol,
                turno: turno,
                telefono: telefono,
                estado: estado,
            }

            await workerService.update(worker.id, changedWorker)

            setClassNotification('successful-notification')
            setMessageNotification(`${changedWorker.nombre} actualizado`)

            setTimeout(() => {
                setMessageNotification(null)
                handleSubmit()
            }, 5000)


        } catch {
            setClassNotification('error-notification')
        }
    }

    const deleteWorker = async () => {
        if (window.confirm(`Está seguro que desea eliminar a ${worker.nombre}`)) {
            const response = await workerService.eliminate(worker.id)
            console.log(response)
        }

        setClassNotification('successful-notification')
        setMessageNotification(`${worker.nombre} eliminado`)
    }

    return (

        <div className="form-container">
            <h2>Registro de trabajador</h2>
            <form onSubmit={(event) => updateWorker(event, worker)}>
                <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cedula">cedula</label>
                    <input 
                        id="cedula"
                        className="form-control"
                        value={cedula}
                        onChange={({ target }) => setCedula(target.value)}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">nombre</label>
                    <input 
                        id="nombreTrabajador"
                        className="form-control"
                        value={nombre}
                        onChange={({ target }) => setNombre(target.value)}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="rol">rol</label>
                    <select 
                        id="rol"
                        className="form-control"
                        value={rol}
                        onChange={({ target }) => setRol(target.value)}
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
                        onChange={({ target }) => setTurno(target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">telefono</label>
                    <input 
                        id="telefono"
                        className="form-control"
                        value={telefono}
                        onChange={({ target }) => setTelefono(target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="estado">estado</label>
                    <select 
                        id="estado"
                        className="form-control"
                        value={estado}
                        onChange={({ target }) => setEstado(target.value)}
                    >
                        <option value="" disabled></option>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="submit" className="btn">Guardar</button>
                    <button onClick={() => deleteWorker()} className="btn-delete">Borrar</button>
                </div>
            </form>
            <Notification message={messageNotification} className={classNotification}/>
        </div>
    )}

export default WorkerUpdateForm