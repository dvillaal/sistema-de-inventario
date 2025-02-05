const ProductForm = ({ handleSubmit, numeroReferencia, nombre, categoria, cantidad, precio, ubicacion, handleNumeroRefenreciaChange, handleNombreChange, handleCategoriaChange, handleCantidadChange, handlePrecioChange, handleUbicacionChange }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            Numero de Referncia 
            <input 
                value={numeroReferencia}
                onChange={handleNumeroRefenreciaChange}
            />
            </div>
            <div>
            Nombre 
            <input 
                value={nombre}
                onChange={handleNombreChange}
            />
            </div>
            <div>
            Categoría
            <input 
                value={categoria}
                onChange={handleCategoriaChange}
            />
            </div>
            <div>
            Cantidad 
            <input 
                value={cantidad}
                onChange={handleCantidadChange}
            />
            </div>
            <div>
            Precio 
            <input 
                value={precio}
                onChange={handlePrecioChange}
            />
            </div>
            <div>
            Ubicacion
            <input 
                value={ubicacion}
                onChange={handleUbicacionChange}
            />
            </div>
            <button type="submit">Guardar</button>
        </form>
    </div>
)

export default ProductForm