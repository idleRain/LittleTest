window.addEventListener('load', function () {
    // 用户tab栏状态切换
    let isA = document.querySelector('.toolbar').querySelectorAll('a')
    for (let i = 0; i < isA.length; i++) {
        isA[i].addEventListener('click', function () {
            document.querySelector('.active').classList.remove('active')
            this.classList.add('active')
        })
    }
    // 收藏状态切换
    let isI = document.querySelectorAll('.icon-shoucang1')
    for (let k = 0; k < isI.length; k++) {
        let index = false
        isI[k].addEventListener('click', function () {
            index = !index
            if (index) {
                this.style.color = '#f00'
            } else {
                this.style.color = '#fff'
            }
        })
    }
})