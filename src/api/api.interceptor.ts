import axios from "axios";


export const getContentType = () => ({
    'Content-type': 'application/json',
})

export const errorCatch = (error:any): string => {
    const message = error?.response?.data?.message

    return message
        ? typeof error.response.data.message == 'object'
            ? message[0]
            : message
        : error.message

}

export const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: getContentType()
})





