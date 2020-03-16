import request from '../../helpers/request'

const status = (token) => {
    return request({
        url: '//localhost:4000/auth/status',
        method: 'POST',
        data: { token }
    })
}
const login = (email, password) => {
    return request({
        url: '//localhost:4000/auth/login',
        method: 'POST',
        data: { email, password }
    })
}
const register = (email, password, repeatPassword) => {
    return request({
        url: '//localhost:4000/auth/register',
        method: 'POST',
        data: { email, password, repeatPassword }
    })
}

export default {
    login,
    register,
    status
}