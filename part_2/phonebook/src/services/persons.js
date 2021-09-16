import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

export const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data)
}

export const create = person => {
    const request = axios.post(baseUrl, person);
    return request.then(response => response.data)
}

export const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response)
}

export const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response)
}
