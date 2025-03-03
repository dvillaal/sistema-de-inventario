import { useState, useEffect } from "react"
import productService from '../services/products'
import Notification from './Notification'

const Products = ({ product }) => {
    const [rol, setRol] = useState(null)
    const [cantidad, setCantidad] = useState(product.cantidad)

    const [messageNotification, setMessageNotification] = useState(null)
    const [classNotification, setClassNotification] = useState(null)

    useEffect(() => {
        const rolJSON = window.localStorage.getItem('rol')
        if (rolJSON) {
            const rol = JSON.parse(rolJSON)
            setRol(rol)
        }
  }, [])

    const updateProduct = async (productToUpdate) => {
        try {
            const changedProduct = {
                ...productToUpdate,
                cantidad: cantidad
            }
            
            await productService.update(product.id, changedProduct)

            setClassNotification('successful-notification')
            setMessageNotification(`${product.nombre} actualizado`)

            setTimeout(() => {
                setMessageNotification(null)
            }, 5000)

        } catch {
            setClassNotification('error-notification')
        }
    }

    if (rol === 'asesor'){
        if (product.cantidad >= 10) {

            return (
                <div className="grid-row asesor"> 
                <div className="grid-item">{product.nombre}</div> 
                <div className="grid-item">{product.numeroReferencia}</div> 
                <div className="grid-item">{product.categoria}</div>
                <div className="grid-item price">
                    ${new Intl.NumberFormat('es-CO').format(product.precio)}
                </div>
                <div className="grid-item quantity">{product.cantidad}</div>
            </div>
            )

        } else if (product.cantidad === 0) {

            return (
                <div className="grid-row asesor"> 
                    <div className="grid-item-0">{product.nombre}</div> 
                    <div className="grid-item-0">{product.numeroReferencia}</div> 
                    <div className="grid-item-0">{product.categoria}</div>
                    <div className="grid-item price">
                        ${new Intl.NumberFormat('es-CO').format(product.precio)}
                    </div>
                    <div className="grid-item quantity-0">{product.cantidad}</div>
                </div>
            )
        } else {

            return (
                <div className="grid-row asesor"> 
                    <div className="grid-item-10">{product.nombre}</div> 
                    <div className="grid-item-10">{product.numeroReferencia}</div> 
                    <div className="grid-item-10">{product.categoria}</div>
                    <div className="grid-item price">
                        ${new Intl.NumberFormat('es-CO').format(product.precio)}
                    </div>
                    <div className="grid-item quantity-10">{product.cantidad}</div>
                </div>
            )
        }

    } else if (rol === 'bodeguero') {
        return (
            <div className="grid-row bodeguero">
                <div className="grid-item">{product.nombre}</div>
                <div className="grid-item">{product.numeroReferencia}</div>
                <div className="grid-item">{product.ubicacion}</div>
            </div>
        )
    } else if (rol === 'admin') {
        return (
            <div className="grid-row asesor"> 
            <div className="grid-item">{product.nombre}</div> 
            <div className="grid-item">{product.numeroReferencia}</div> 
            <div className="grid-item">{product.categoria}</div>
            <div className="grid-item price">
                ${new Intl.NumberFormat('es-CO').format(product.precio)}
            </div>
            <div style={{ display: "flex"}}>
                <div className="grid-item quantity">{cantidad}</div>
                <div style={{ display: "flex", flexDirection:'column', justifyContent: 'space-evenly' }}>
                    <div style={{ display: "flex" }}>
                        <button className="increment-button" onClick={() => setCantidad(cantidad + 1)}>+</button>
                        <button className="decrement-button" onClick={() => setCantidad(cantidad - 1)}>-</button>
                    </div>
                    <div>
                        <button className='btn' onClick={() => updateProduct()}>Actualizar</button>
                    </div>
                </div>
                <Notification message={messageNotification} className={classNotification}/>
            </div>
        </div>
        )
    }
}

export default Products