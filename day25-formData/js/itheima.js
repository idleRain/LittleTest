function itheima(obj) {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url)
    // get 请求
    if (obj.method.toUpperCase() === 'GET') {
        // 如果有参数
        if (obj.params) {
            const qs = []
            for (let k in obj.params) {
                qs.push(k + '=' + obj.params[k])
            }
            if (qs.length) obj.url = obj.url + '?' + qs.join('&')
        }
        xhr.send()
    }
    // post 请求
    if (obj.method.toUpperCase() === 'POST') {
        // 如果有参数
        if (obj.data instanceof FormData) {     // 判断 FormData 要放在前面
            xhr.send(obj.data)
        } else if (obj.data instanceof Object) {
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send(JSON.stringify(obj.data))
        } else { // 没有参数
            xhr.send()
        }
    }
    // 监听 load 事件
    xhr.addEventListener('load', function () {
        // console.log(JSON.parse(xhr.response))
        obj.success(JSON.parse(xhr.response))
    })
}