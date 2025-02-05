import { useState, useEffect } from "react"
import productService from '../services/products'
import Products from "./Products"
import Filter from "./Filter"

const Asesor = () => {
    const [productos, setProductos] = useState([])
    const [filterName, setFilterName] = useState("")

    useEffect(() => {
        productService
            .getAll()
            .then(initialProducts => {
                setProductos(initialProducts)
            })
    }, [])

    let productsToShow = []

    if (filterName === ""){
        productsToShow = productos
    } else {
        productsToShow = productos.filter((product) => product.nombre.toLowerCase().includes(filterName.toLowerCase()))
    }


    return (

        <div className="container">
            <h2>Asesor</h2>

            <Filter filterName={filterName} handleFilterNamechange={({ target }) => setFilterName(target.value)}/>

                <div className="grid-container asesor">
                        <div className="grid-item"><strong>Nombre</strong></div>
                        <div className="grid-item"><strong>Referencia</strong></div>
                        <div className="grid-item"><strong>Categoría</strong></div>
                        <div className="grid-item"><strong>Precio</strong></div>
                        <div className="grid-item"><strong>Cantidad</strong></div>
                </div>
                <div>
                    {productsToShow.map((product, i) => <Products key={i} product={product}/>)}
                </div>

        </div>
    )
}
    
export default Asesor