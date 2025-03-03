import { useState, useEffect } from "react"
import productService from '../services/products'
import Products from "./Products"
import Filter from "./Filter"

const ProductUpdate = () => {
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

export default ProductUpdate