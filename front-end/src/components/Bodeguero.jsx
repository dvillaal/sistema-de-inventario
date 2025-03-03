import { useState, useEffect } from "react"
import productService from '../services/products'
import Filter from "./Filter"
import Products from "./Products"

const Bodeguero = () => {
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
    let productsToShowByName = []
    let productsToShowByReference = []

    if (filterName === ""){
        productsToShow = productos
    } else {
        productsToShowByName = productos.filter((product) => product.nombre.toLowerCase().includes(filterName.toLowerCase()))
        productsToShowByReference = productos.filter((product) => product.numeroReferencia.toLowerCase().includes(filterName.toLowerCase()))

        productsToShow = [...productsToShowByName, ...productsToShowByReference]
    }

    return (
        <div className="container">
            <h2>Bodeguero</h2>

            <Filter filterName={filterName} handleFilterNamechange={({ target }) => setFilterName(target.value)}/>

            <div className="grid-container bodeguero">
                <div className="grid-item"><strong>Nombre</strong></div>
                <div className="grid-item"><strong>Referencia</strong></div>
                <div className="grid-item"><strong>Ubicación</strong></div>
            </div>
            <div>
                {productsToShow.map((product, i) => <Products key={i} product={product}/>)}
            </div>
        </div>
    )
}

export default Bodeguero