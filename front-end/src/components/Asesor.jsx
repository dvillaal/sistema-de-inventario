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

        <div>
            <h2>Asesor</h2>

            <Filter filterName={filterName} handleFilterNamechange={({ target }) => setFilterName(target.value)}/>

            <ul>
                {productsToShow.map((product, i) => <Products key={i} product={product}/>)}
            </ul>
        </div>
    )
}
    
export default Asesor