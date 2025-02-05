const Filter = ({ filterName, handleFilterNamechange }) => (
    <div> Buscar <input value={filterName} onChange={handleFilterNamechange}></input></div>
)


export default Filter