import { useState, useEffect } from "react"

const Products = ({ product }) => {
    const [rol, setRol] = useState(null)
    useEffect(() => {
        const rolJSON = window.localStorage.getItem('rol')
        if (rolJSON) {
            const rol = JSON.parse(rolJSON)
            setRol(rol)
        }
  }, [])
    console.log(rol)
    if (rol === 'asesor'){
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
    } else if (rol === 'bodeguero') {
        return (
            <div className="grid-row bodeguero">
                <div className="grid-item">{product.nombre}</div>
                <div className="grid-item">{product.numeroReferencia}</div>
                <div className="grid-item">{product.ubicacion}</div>
            </div>
        )
    }
}

export default Products