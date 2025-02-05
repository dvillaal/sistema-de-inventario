import axios from 'axios'
const baseUrl = '/api/products'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async newProduct => {
    const response = await axios.post(baseUrl, newProduct)
    return response.data
}

const update = async (id, newProduct) => {
    const response = await axios.put(`${baseUrl}/${id}`, newProduct)
    return response.data
}

export default {getAll, create, update}