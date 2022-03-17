window.addEventListener('load', function () {
    let isA = document.querySelector('.toolbar').querySelectorAll('a')
    for (let i = 0; i < isA.length; i++) {
        isA[i].addEventListener('click', function () {
            for (let j = 0; j < isA.length; j++) {
                isA[j].classList.remove('active')
            }
            this.classList.add('active')
        })
    }
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