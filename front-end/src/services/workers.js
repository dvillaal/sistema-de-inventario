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

export default {getAll, create, update}