import axios from 'axios'

interface RegisterProps {
    email : string,
    userName : string,
    password : string
}

interface LoginProps {
    email : string,
    password : string
}

const api = axios.create({
    baseURL:'http://localhost:80/auth'
})

export const register = async(props : RegisterProps) => {
    const {email, userName, password } = props
    const {data} = await api.post('/register',{
        param : {
            email,
            userName,
            password
        }
    })
    return data
}


export const login = async(props : LoginProps) => {
    const {email,  password } = props
    const {data} = await api.post('/login',{
        param : {
            email,
            password
        }
    })
    return data
}