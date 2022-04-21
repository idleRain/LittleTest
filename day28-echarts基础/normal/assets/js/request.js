axios.interceptors.request.use(
    response => {
        const token = localStorage.getItem('token')
        if(token) response.headers.Authorization = token
        return response
    },
    error => {
        return Promise.reject(error)
    }
)
axios.interceptors.response.use(
    response => {
        if(response.data.code !== 0) return toastr.warning(response.data.message)
        return response
    },
    error => {
        return Promise.reject(error)
    }
)