const tbody = document.querySelector('tbody')
const form = document.querySelector('.add-form')
// 初始化页面
render()

// 获取省市县
const province = form.querySelector('select[name=province]')
const city = form.querySelector('select[name=city]')
const county = form.querySelector('select[name=county]')
document.querySelector('[data-bs-toggle=modal]').addEventListener('click', function () {
    province.innerHTML = `<option selected>--省--</option>`
    city.innerHTML = `<option selected>--市--</option>`
    county.innerHTML = `<option selected>--县--</option>`
    getProvince(province)
})
province.addEventListener('change', function () {
    getCity(this, city)
})
city.addEventListener('change', function () {
    getCounty(province, this, county)
})

// 省
function getProvince(Ele1) {
    axios.get('http://www.itcbc.com:8000/geo/province').then(
        response => {
            Ele1.innerHTML = `<option selected>--省--</option>` + response.data.map(item => {
                return (`
                    <option value="${item}">${item}</option>
                `)
            }).join('')
        }
    )
}

// 市
function getCity(Ele1, Ele2) {
    axios.get('http://www.itcbc.com:8000/geo/city', {
        params: {
            pname: Ele1.value
        }
    }).then(
        response => {
            Ele2.innerHTML = `<option selected>--市--</option>` + response.data.map(item => {
                return (`
                    <option value="${item}">${item}</option>
                `)
            }).join('')
        }
    )
}

// 县
function getCounty(Ele1, Ele2, Ele3) {
    axios.get('http://www.itcbc.com:8000/geo/county', {
        params: {
            pname: Ele1.value,
            cname: Ele2.value
        }
    }).then(
        response => {
            Ele3.innerHTML = `<option selected>--县--</option>` + response.data.map(item => {
                return (`
                    <option value="${item}">${item}</option>
                `)
            }).join('')
        }
    )
}

// 添加学生
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const data = {
        name: form.querySelector('input[name=name]').value,
        sex: form.querySelector('input[name=sex]').value,
        age: form.querySelector('input[name=age]').value,
        group: form.querySelector('select[name=group]').value,
        phone: form.querySelector('input[name=phone]').value,
        salary: form.querySelector('input[name=salary]').value,
        truesalary: form.querySelector('input[name=truesalary]').value,
        province: province.value,
        city: city.value,
        county: county.value,
    }
    const str = `name=${data.name}&sex=${data.sex}&age=${data.age}&group=${data.group}&phone=${data.phone}&salary=${data.salary}&truesalary=${data.truesalary}&province=${data.province}&city=${data.city}&county=${data.county}`
    // axios({
    //     method: 'post',
    //     url: 'http://www.itcbc.com:8000/student/add',
    //     headers: {
    //         "Content-Type": "application/x-www-form-urlencoded"
    //     },
    //     data: {data}
    // }
    axios.post('http://www.itcbc.com:8000/student/add', str).then(
        response => {
            if (response.data.code === 0) {
                toastr.success(response.data.message)
                this.reset()
                render()
            } else {
                toastr.warning(response.data.message)
            }
            console.log(response)
        },
        error => {
            console.log(error.message)
        }
    )
})

// 删除与修改学生
tbody.addEventListener('click', function (e) {
        // 删除
        if (e.target.tagName === 'BUTTON' && e.target.outerText === '删除') {
            if (confirm('确认删除吗？')) {
                axios.delete('http://www.itcbc.com:8000/student/delete', {
                    params: {
                        id: e.target.dataset.id
                    }
                }).then(
                    response => {
                        toastr.success(response.data.message)
                        render()
                    }
                )
            }
        }

        // 修改
        const updateForm = document.querySelector('.update-form')
        if (e.target.tagName === 'BUTTON' && e.target.outerText === '修改') {
            // JQuery 操作显示模态框
            // $('#updateModal').modal('show')

            // 原生操作显示模态框
            const myModal = new bootstrap.Modal(document.querySelector('#updateModal'), {
                keyboard: false
            })
            myModal.show()

            const id = e.target.dataset.id
            const province = updateForm.querySelector('select[name=province]')
            const city = updateForm.querySelector('select[name=city]')
            const county = updateForm.querySelector('select[name=county]')
            const name = updateForm.querySelector('input[name=name]')
            const sex = updateForm.querySelectorAll('input[name=sex]')
            const age = updateForm.querySelector('input[name=age]:checked')
            const group = updateForm.querySelector('select[name=group]')
            const phone = updateForm.querySelector('input[name=phone]')
            const salary = updateForm.querySelector('input[name=salary]')
            const truesalary = updateForm.querySelector('input[name=truesalary]')

            province.innerHTML = `<option selected>--省--</option>`
            city.innerHTML = `<option selected>--市--</option>`
            county.innerHTML = `<option selected>--县--</option>`

            axios.get('http://www.itcbc.com:8000/student/one', {
                params: {
                    id
                }
            }).then(
                response => {
                    console.log(response)
                    const data = response.data.data
                    name.value = data.name
                    age.value = data.age
                    group.value = data.group
                    phone.value = data.phone
                    salary.value = data.salary
                    truesalary.value = data.truesalary
                    province.value = data.province
                    city.innerHTML = `<option value="${data.city}">${data.city}</option>`
                    county.innerHTML = `<option value="${data.county}">${data.county}</option>`
                    if (data.sex === '男') {
                        sex[0].checked = true
                    }else{
                        sex[1].checked = true
                    }
                    console.log(`id=${id}&name=${name.value}&sex=${sexValue}&age=${age.value}&group=${group.value}&phone=${phone.value}&salary=${salary.value}&truesalary=${truesalary.value}&province=${province.value}&city=${city.value}&county=${county.value}`)
                }
            )



            // 获取修改框 省、市、县
            getProvince(province)
            province.addEventListener('change', function () {
                getCity(province, city)
            })
            city.addEventListener('change', function () {
                getCounty(province, city, county)
            })

            updateForm.addEventListener('submit', function (e) {
                e.preventDefault()
                const str = `id=${id}&name=${name.value}&sex=${sex.alue}&age=${age.value}&group=${group.value}&phone=${phone.value}&salary=${salary.value}&truesalary=${truesalary.value}&province=${province.value}&city=${city.value}&county=${county.value}`

                axios.put('http://www.itcbc.com:8000/student/update', str).then(
                    response => {
                        toastr.success(response.data.message)
                        render()
                        myModal.hide()
                    },
                    error => {
                        toastr.warning(error.message)
                    }
                )
            })
        }
    }
)

// 页面渲染函数
function render() {
    axios.get('http://www.itcbc.com:8000/student/list').then(
        response => {
            const studentsData = response.data.data
            tbody.innerHTML = studentsData.map(item => {
                return (`
                <tr>
                  <th scope="row">${item.id}</th>
                  <td>${item.name}</td>
                  <td>${item.age}</td>
                  <td>${item.sex}</td>
                  <td>${item.group}</td>
                  <td>${item.phone}</td>
                  <td>${item.salary}</td>
                  <td>${item.truesalary}</td>
                  <td>${item.province + item.city + item.county}</td>
                  <td>
                    <button type="button" class="btn btn-primary btn-sm" data-id="${item.id}">修改</button>
                    <button type="button" class="btn btn-danger btn-sm" data-id="${item.id}">删除</button>
                  </td>
                </tr>
            `)
            }).join('')
        }
    )
}


router.beforeEach((to, from, next) => {
    console.log('哇，金色传说！')
    console.log('哇，我是前置路由守卫！')
    console.log(to)
    console.log(from)
    console.log(next)
})

export default router