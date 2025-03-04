import { useState } from 'react'

import ManageProduct from './ManageProduct'
import ManageWorker from './ManageWorker'
import GeneratePdf from './GeneratePdf'


const Administrador = () => {
    const [productVisible, setProductVisible] = useState(false)    
    const [workerVisible, setWorkerVisible] = useState(false)
    const [pdfVisible, setPdfVisible] = useState(false)

    const hideWhenVisibleProduct = { display: productVisible ? 'none' : ''}
    const showWhenVisibleProduct = { display: productVisible ? '' : 'none'}

    const hideWhenVisibleWorker = { display: workerVisible ? 'none' : ''}
    const showWhenVisibleWorker = { display: workerVisible ? '' : 'none'}

    const hideWhenVisiblepdf = { display: pdfVisible ? 'none' : ''}
    const showWhenVisiblepdf = { display: pdfVisible ? '' : 'none'}

    return (
    <div className='container'>
        <h1>Administrador</h1>

        <div style={workerVisible ? hideWhenVisibleWorker : hideWhenVisiblepdf}>
            <div style={hideWhenVisibleProduct}>
                <button onClick={() => { setProductVisible(true), setWorkerVisible(false), setPdfVisible(false) }}>Gestionar Producto</button>
            </div>
            <div style={showWhenVisibleProduct}>
                <ManageProduct />
                <button className="btn btn-back" onClick={() => setProductVisible(false)}>Inicio</button> 
            </div>
        </div>

        <div style={ pdfVisible ? hideWhenVisiblepdf : hideWhenVisibleProduct}>
            <div style={hideWhenVisibleWorker}>
                <button onClick={() => {setWorkerVisible(true), setProductVisible(false), setPdfVisible(false)}}>Gestionar Empleado</button>
            </div>
            <div style={showWhenVisibleWorker}>
                <ManageWorker />
                <button className="btn btn-back" onClick={() => setWorkerVisible(false)}>Inicio</button> 
            </div>
        </div>

        <div style={ workerVisible ? hideWhenVisibleWorker : hideWhenVisibleProduct } >
            <div style={ hideWhenVisiblepdf }>
                <button onClick={() => {setPdfVisible(true), setWorkerVisible(false), setProductVisible(false)}}>Generar Reporte</button>
            </div>
            <div style={showWhenVisiblepdf}>
                <div style={{ display:"flex" }}>
                    <GeneratePdf />
                </div>
                    <button className="btn btn-back" onClick={() => setPdfVisible(false)}>Inicio</button> 
            </div>
        </div>

    </div>
    )
}

export default Administrador