import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:80/search'
})

type value = string
export const getSearch = async(value : value) => {
    const {data} = await api.post('/',{
        param : {
            value
        }
    })
    return data
}