const ProductForm = ({ handleSubmit, numeroReferencia, nombre, categoria, cantidad, precio, ubicacion, handleNumeroRefenreciaChange, handleNombreChange, handleCategoriaChange, handleCantidadChange, handlePrecioChange, handleUbicacionChange }) => (
    <div className="form-container">
        <h2>Registro de productos</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="numeroReferencia">Número de Referencia</label>
                <input
                    id="numeroReferencia"
                    className="form-control"
                    value={numeroReferencia}
                    onChange={handleNumeroRefenreciaChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input 
                    id="nombre"
                    className="form-control"
                    value={nombre}
                    onChange={handleNombreChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="categoria">Categoría</label>
                <input 
                    id="categoria"
                    className="form-control"
                    value={categoria}
                    onChange={handleCategoriaChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                    id="cantidad"
                    className="form-control"
                    value={cantidad}
                    onChange={handleCantidadChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="precio">Precio</label>
                <input 
                    id="precio"
                    className="form-control"
                    value={precio}
                    onChange={handlePrecioChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="ubicacion">Ubicación</label>
                <input 
                    id="ubicacion"
                    className="form-control"
                    value={ubicacion}
                    onChange={handleUbicacionChange}
                />
            </div>
            <button type="submit" className="btn">Guardar</button>
        </form>
    </div>
)

export default ProductForm