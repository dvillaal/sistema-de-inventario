import { useState } from 'react'
import ProductForm from './ProductForm'
import productService from '../services/products'
import Notification from './Notification'

const ManageProduct = () => {
    const [productFormVisible, setProductFormVisible] = useState(false)

    const [numeroReferencia, setNumeroReferencia] = useState('')
    const [nombreProducto, setNombreProducto] = useState('')
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
                nombre: nombreProducto,
                categoria: categoria,
                cantidad: cantidad,
                precio: precio,
                ubicacion: ubicacion
            }
        
            await productService.create(productObject)
        
            setNumeroReferencia('')
            setNombreProducto('')
            setCategoria('')
            setCantidad('')
            setPrecio('')
            setUbicacion('')
            
            setClassNotification('successful-notification')
            setMessageNotification(`${productObject.nombre} agregado`)

            setTimeout(() => {
                setMessageNotification(null)
            }, 5000)
        } catch (error){
            setClassNotification('error-notification')
            if (error.response.data.error.includes("is required")){
                setMessageNotification('Rellene todos los campos')
            } else if (error.response.data.error.includes("El precio debe ser mayor que 0")) {
                setMessageNotification('El precio debe ser mayor que 0')
            } else if (error.response.data.error.includes("La cantidad debe ser mayor que 0")) {
                setMessageNotification('La cantidad debe ser mayor que 0')
            } else if (error.response.data.error.includes("cantidad: Cast to Number failed for value")) {
                setMessageNotification('El campo cantidad es un campo numério')
            } else if (error.response.data.error.includes("precio: Cast to Number failed for value")) {
                setMessageNotification('El campo precio es un campo numério')
            } else if (error.response.data.error.includes("expected `username` to be unique")) {
                setMessageNotification('El número de referencia debe ser único  ')
            }
            console.log(error.response.data.error)
    
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
                <div style={hideWhenVisible}>
                    <button onClick={() => setProductFormVisible(true)}>Registrar productos</button>
                </div>
                <div style={showWhenVisible}>
                    <ProductForm
                        handleSubmit={addProduct}
                        numeroReferencia={numeroReferencia}
                        nombre={nombreProducto}
                        categoria={categoria}
                        cantidad={cantidad}
                        precio={precio}
                        ubicacion={ubicacion}
                        handleNumeroRefenreciaChange={({ target }) => setNumeroReferencia(target.value)}
                        handleNombreChange={({ target }) => setNombreProducto(target.value)}
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
                
                {productForm()}
        
            </div>
        )
}

export default ManageProduct