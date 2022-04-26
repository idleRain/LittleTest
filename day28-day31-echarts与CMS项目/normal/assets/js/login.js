const register = document.querySelector('.register')
const login = document.querySelector('.login')
const registerBtn = login.querySelector('.mb-3 a')
const loginBtn = register.querySelector('.mb-3 a')
registerBtn.addEventListener('click', jumpRegister)
loginBtn.addEventListener('click', jumpLogin)

// 跳转注册页面
function jumpRegister() {
    login.style.display = 'none'
    register.style.display = 'block'
}

// 跳转登录页面
function jumpLogin() {
    register.style.display = 'none'
    login.style.display = 'block'
}

// 判断用户名与密码
function verification(username, password) {
    if (!(username.value.trim() && password.value.trim())) {
        return toastr.warning('用户名或密码不能为空！')
    }
    if (!/^([a-zA-Z]|[u4E00-u9FA5])([a-zA-Z0-9]|[u4E00-u9FA5]|[_]){1,15}$/.test(username.value)) {
        return toastr.warning('用户名应为2~16位字母、数字或下划线！')
    }
    if (!/^([a-zA-Z]|[u4E00-u9FA5])([a-zA-Z0-9]|[u4E00-u9FA5]|[_]){5,15}$/.test(password.value)) {
        return toastr.warning('密码应为6~16位字母、数字或下划线！')
    }
    return true
}

// 注册
register.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    const username = register.querySelector('[name=username]')
    const password = register.querySelector('[name=password]')
    if (!verification(username, password)) return
    axios.post('http://www.itcbc.com:8000/api/register', {
        username: username.value,
        password: password.value
    }).then(
        response => {
            if (response.data.code === 0) {
                toastr.success(response.data.message)
                // 重置表单
                this.reset()
                setTimeout(jumpLogin, 500)
            } else {
                return toastr.error(response.data.message)
            }
        },
        error => {
            // toastr.error(error.message)
            Promise.reject(error)
        }
    )
})
// 登录
login.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    const username = login.querySelector('[name=username]')
    const password = login.querySelector('[name=password]')
    if (!verification(username, password)) return
    axios.post('http://www.itcbc.com:8000/api/login', {
        username: username.value,
        password: password.value
    }).then(
        response => {
            console.log(response)
            if (response.data.code === 0) {
                toastr.success(response.data.message)
                // 重置表单
                this.reset()
                localStorage.setItem('token',response.data.token)
                setTimeout(() => { location.href = 'index.html' }, 1000)
            } else {
                return toastr.error(response.data.message)
            }
        },
        error => {
            // toastr.error(error.message)
            Promise.reject(error)
        }
    )
})
