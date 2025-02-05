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
            <li> {product.nombre} {product.categoria} {product.cantidad}</li>
        )
    } else if (rol === 'bodeguero') {
        return (
            <li> {product.nombre} {product.ubicacion}</li>
        )
    }
}

export default Products