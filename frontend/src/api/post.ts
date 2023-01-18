import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:80/posts'
})

interface CreateProps{
    title: string,
    recipe : string,
    tags: Array<string>,
    imgUrl:string
}

export const create = async(props : CreateProps) => {
    const token = sessionStorage.getItem('token')
    const {title, recipe, tags, imgUrl} = props
    const {data} = await api.post('/',{
        param : {
            title,
            recipe,
            tags,
            token,
            imgUrl
        }
    })
    return data
}

export const getAll = async() => {
    const {data} = await api.get('/')
    return data
}

type _id = string

 

export const getOne = async(_id : _id) => {
    const token = sessionStorage.getItem('token')
    const {data} = await api.post(`/posts/${_id}`,{
        param : {
            token
        }
    })
    return data
}

