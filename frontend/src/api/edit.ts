import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:80/edit'
})

type _id = string

export const editOne = async(_id : _id) => {
    const token = sessionStorage.getItem('token')
    const {data} = await api.post(`/${_id}`,{
        param : {
            token
        }
    })
    return data
}