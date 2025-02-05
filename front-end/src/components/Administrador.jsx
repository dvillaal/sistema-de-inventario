import { useState } from 'react'
import ProductForm from './ProductForm'
import productService from '../services/products'
import Notification from './Notification'

const Administrador = () => {
    const [productFormVisible, setProductFormVisible] = useState(false)

    const [numeroReferencia, setNumeroReferencia] = useState('')
    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precio, setPrecio] = useState('')
    const [ubicacion, setUbicacion] = useState('')

    const [messageNotification, setMessageNotification] = useState(null)
    const [classNotification, setClassNotification] = useState(null)

    const addProduct = async (event) => {
        try {

            event.preventDefault()
            
            const productObject = {
            numeroReferencia: numeroReferencia,
            nombre: nombre,
            categoria: categoria,
            cantidad: cantidad,
            precio: precio,
            ubicacion: ubicacion
        }
        
        await productService.create(productObject)
        
        setNumeroReferencia('')
        setNombre('')
        setCategoria('')
        setCantidad('')
        setPrecio('')
        setUbicacion('')
        
        setMessageNotification(`${productObject.nombre} agregado`)
        setClassNotification('successful-notification')

        setTimeout(() => {
            setMessageNotification(null)
        }, 5000)
        } catch {
            setMessageNotification('Rellene todos los campos')
            setClassNotification('error-notification')

            setTimeout(() => {
                setMessageNotification(null)
                setClassNotification(null)
            }, 5000);
        }
        
    }

    const productForm = () => {
        const hideWhenVisible = { display: productFormVisible ? 'none' : '' }
        const showWhenVisible = { display: productFormVisible ? '' : 'none' }
        return (
            <div className='container'>
                <h2>Registro de productos</h2>
                <div style={hideWhenVisible}>
                    <button onClick={() => setProductFormVisible(true)}>Registrar productos</button>
                </div>
                <div style={showWhenVisible}>
                    <ProductForm
                        handleSubmit={addProduct}
                        numeroReferencia={numeroReferencia}
                        nombre={nombre}
                        categoria={categoria}
                        cantidad={cantidad}
                        precio={precio}
                        ubicacion={ubicacion}
                        handleNumeroRefenreciaChange={({ target }) => setNumeroReferencia(target.value)}
                        handleNombreChange={({ target }) => setNombre(target.value)}
                        handleCategoriaChange={({ target }) => setCategoria(target.value)}
                        handleCantidadChange={({ target }) => setCantidad(target.value)}
                        handlePrecioChange={({ target }) => setPrecio(target.value)}
                        handleUbicacionChange={({ target }) => setUbicacion(target.value)}
                    />
                    <button className="btn btn-back" onClick={() => setProductFormVisible(false)}>Atrás</button> 
                </div>

                <Notification message={messageNotification} className={classNotification}/>
            </div>
        )
    }

    return (
    <div>
        <h1>Administrador</h1>
        
        {productForm()}

    </div>
    )
}

export default Administrador