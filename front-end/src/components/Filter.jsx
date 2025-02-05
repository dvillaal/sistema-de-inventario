const Filter = ({ filterName, handleFilterNamechange }) => (
    <div className="search-container"> <input type='text' className="search-input" placeholder="Buscar productos..."value={filterName} onChange={handleFilterNamechange} ></input></div>
)


export default Filter