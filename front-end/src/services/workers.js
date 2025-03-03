import axios from 'axios'
const baseUrl = '/api/workers'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async newWorker => {
    const response = await axios.post(baseUrl, newWorker)
    return response.data
}

const update = async (id, newWorker) => {
    const response = await axios.put(`${baseUrl}/${id}`, newWorker)
    return response.data
}

const eliminate = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
}

export default {getAll, create, update, eliminate}