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

    const hideWhenVisibleAdd = { display: workerFormVisible ? 'none' : '' }
    const showWhenVisibleAdd = { display: workerFormVisible ? '' : 'none' }

    const hideWhenVisibleUpdate = { display: workerUpdateFormVisible ? 'none' : '' }
    const showWhenVisibleUpdate = { display: workerUpdateFormVisible ? '' : 'none' }

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
        const handleSubmitUpdate = () => setWorkerUpdateFormVisible(false)

        return(
            <div className='container'>
                <div style={hideWhenVisibleUpdate}>
                    <button onClick={() => setWorkerUpdateFormVisible(true)}>Editar trabajador</button>
                </div>
                <div style={showWhenVisibleUpdate}>
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
                            handleSubmit={handleSubmitUpdate}
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
        return (
            <div className='container'>
                <div style={hideWhenVisibleAdd}>
                    <button onClick={() => setWorkerFormVisible(true)}>Registrar trabajador</button>
                </div>
                <div style={showWhenVisibleAdd}>
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
            <div style={hideWhenVisibleUpdate}>
                {workerForm()}
            </div>

            <div style={hideWhenVisibleAdd}>
                {updatedWorker()}
            </div>

        </div>
    )
}

export default ManageWorker