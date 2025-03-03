import { useState, useEffect } from 'react'
import WorkerForm from './WorkerForm'
import WorkerUpdateForm from './WorkerUpdateForm'
import workerService from '../services/workers'
import Notification from './Notification'

const ManageWorker = () => {
    const [workers, setWorkers] = useState([])
    const [worker, setWorker] = useState(undefined)

    const [workerFormVisible, setWorkerFormVisible] = useState(false)
    const [workerUpdateFormVisible, setWorkerUpdateFormVisible] = useState(false)

    const [username, setUsername] = useState('')
    const [cedula, setCedula] = useState('')
    const [nombreTrabajador, setNombreTrabajador] = useState('')
    const [rol, setRol] = useState('')
    const [turno, setTurno] = useState('')
    const [telefono, setTelefono] = useState('')
    const [estado, setEstado] = useState('')
    const [password, setPassword] = useState('')

    const [messageNotification, setMessageNotification] = useState(null)
    const [classNotification, setClassNotification] = useState(null)

    useEffect(() => {
        workerService
            .getAll()
            .then(workers => setWorkers(workers))
    }, [])

    const addWorker = async (event) => {
        try {
            event.preventDefault()

            const workerObject = {
                username: username,
                cedula: cedula,
                nombre: nombreTrabajador,
                rol: rol,
                turno: turno,
                telefono: telefono,
                estado: estado,
                password: password
            }

            console.log(workerObject)

            await workerService.create(workerObject)

            setUsername('')
            setCedula('')
            setNombreTrabajador('')
            setRol('')
            setTurno('')
            setTelefono('')
            setEstado('')
            setPassword('')

            setClassNotification('successful-notification')
            setMessageNotification(`${workerObject.nombre} agregado`)

            setTimeout(() => {
                setMessageNotification(null)
            }, 5000)
        } catch {
            setClassNotification('error-notification')
        }
    }

    const updatedWorker = () => {
        const hideWhenVisible = { display: workerUpdateFormVisible ? 'none' : '' }
        const showWhenVisible = { display: workerUpdateFormVisible ? '' : 'none' }

        return(
            <div className='container'>
                <div style={hideWhenVisible}>
                    <button onClick={() => setWorkerUpdateFormVisible(true)}>Editar trabajador</button>
                </div>
                <div style={showWhenVisible}>
                    <div>
                        <select 
                            value={worker ? worker.nombre : undefined}
                            className='form-control'
                            onChange={({ target }) => {
                                const selectedWorker = workers.find(w => w.nombre === target.value) 
                                setWorker(selectedWorker)
                            
                            }}
                        >    
                            <option value=""></option>
                            {workers.map((worker, i) => 
                                <option key={i} value={worker.nombre}>{worker.nombre}</option>
                            )}
                        </select>
                    </div>
                    {worker !== undefined ? 
                        <WorkerUpdateForm
                            worker={worker}
                            handleSubmit={addWorker}
                            username={username}
                            cedula={cedula}
                            nombre={nombreTrabajador}
                            rol={rol}
                            turno={turno}
                            telefono={telefono}
                            estado={estado}
                            password={password}
                            handleUsernameChange={({ target }) => setUsername(target.value)}
                            handleCedulaChange={({ target }) => setCedula(target.value)}
                            handleNombreChange={({ target }) => setNombreTrabajador(target.value)}
                            handleRolChange={({ target }) => setRol(target.value)}
                            handleTurnoChange={({ target }) => setTurno(target.value)}
                            handleTelefonoChange={({ target }) => setTelefono(target.value)}
                            handleEstadoChange={({ target }) => setEstado(target.value)}
                            handlePasswordChange={({ target }) => setPassword(target.value)}
                            setUsername={setUsername}
                            setCedula={setCedula}
                            setNombreTrabajador={setNombreTrabajador}
                            setRol={setRol}
                            setTurno={setTurno}
                            setTelefono={setTelefono}
                            setEstado={setEstado}
                            setPassword={setPassword}
                        />
                        :
                        null
                    }
                    <button className="btn btn-back" onClick={() => setWorkerUpdateFormVisible(false)}>Atrás</button> 
                </div>

                <Notification message={messageNotification} className={classNotification}/>
            </div>
        )
    }
    
    const workerForm = () => {  
        const hideWhenVisible = { display: workerFormVisible ? 'none' : '' }
        const showWhenVisible = { display: workerFormVisible ? '' : 'none' }
        return (
            <div className='container'>
                <div style={hideWhenVisible}>
                    <button onClick={() => setWorkerFormVisible(true)}>Registrar trabajador</button>
                </div>
                <div style={showWhenVisible}>
                    <WorkerForm
                        handleSubmit={addWorker}
                        username={username}
                        cedula={cedula}
                        nombre={nombreTrabajador}
                        rol={rol}
                        turno={turno}
                        telefono={telefono}
                        estado={estado}
                        password={password}
                        handleUsernameChange={({ target }) => setUsername(target.value)}
                        handleCedulaChange={({ target }) => setCedula(target.value)}
                        handleNombreChange={({ target }) => setNombreTrabajador(target.value)}
                        handleRolChange={({ target }) => setRol(target.value)}
                        handleTurnoChange={({ target }) => setTurno(target.value)}
                        handleTelefonoChange={({ target }) => setTelefono(target.value)}
                        handleEstadoChange={({ target }) => setEstado(target.value)}
                        handlePasswordChange={({ target }) => setPassword(target.value)}
                    />
                    <button className="btn btn-back" onClick={() => setWorkerFormVisible(false)}>Atrás</button> 
                </div>

                <Notification message={messageNotification} className={classNotification}/>
            </div>
        )
    }

    return (
        <div>
            <div>
                {workerForm()}
            </div>

            <div>
                {updatedWorker()}
            </div>

        </div>
    )
}

export default ManageWorker