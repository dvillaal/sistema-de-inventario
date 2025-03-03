import { useState } from 'react'

import ManageProduct from './ManageProduct'
import ManageWorker from './ManageWorker'

const Administrador = () => {
    const [productVisible, setProductVisible] = useState(false)    
    const [workerVisible, setWorkerVisible] = useState(false)

    const hideWhenVisibleProduct = { display: productVisible ? 'none' : ''}
    const showWhenVisibleProduct = { display: productVisible ? '' : 'none'}

    const hideWhenVisibleWorker = { display: workerVisible ? 'none' : ''}
    const showWhenVisibleWorker = { display: workerVisible ? '' : 'none'}

    return (
    <div className='container'>
        <h1>Administrador</h1>
        
        <div style={hideWhenVisibleWorker}>
            <div style={hideWhenVisibleProduct}>
                <button onClick={() => setProductVisible(true)}>Gestionar Producto</button>
            </div>
            <div style={showWhenVisibleProduct}>
                <ManageProduct />
                <button className="btn btn-back" onClick={() => setProductVisible(false)}>Inicio</button> 
            </div>
        </div>

        <div style={hideWhenVisibleProduct}>
            <div style={hideWhenVisibleWorker}>
                <button onClick={() => setWorkerVisible(true)}>Gestionar Empleado</button>
            </div>
            <div style={showWhenVisibleWorker}>
                <ManageWorker />
                <button className="btn btn-back" onClick={() => setWorkerVisible(false)}>Inicio</button> 
            </div>
        </div>

    </div>
    )
}

export default Administrador