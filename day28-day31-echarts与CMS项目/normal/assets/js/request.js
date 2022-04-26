// 请求拦截
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
// 响应拦截
axios.interceptors.response.use(
    response => {
        // if(response.data.code !== 0 || response.data.code !== 200) return toastr.warning(response.data.message)
        return response
    },
    error => {
        const {data:res} = error
        if(res.status === 401 && res.data.message === '身份认证失败') {
            location.href = 'login.html'
            toastr.warning('登录状态失效，请重新登录！')
            location.href = 'login.html'
        }
        return Promise.reject(error)
    }
)