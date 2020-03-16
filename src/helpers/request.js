import axios from 'axios'

export default async req => {
    const { data: { status, message }, data } = await axios.request(req)
    if (!status) throw new Error(message)
    return data
}