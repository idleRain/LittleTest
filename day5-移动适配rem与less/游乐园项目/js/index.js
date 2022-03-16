window.addEventListener('load', function () {
    let as = document.querySelector('.toolbar').querySelectorAll('a')
    for (let i = 0; i < as.length; i++) {
        as[i].addEventListener('click', function () {
            for (let j = 0; j < as.length; j++) {
                as[j].classList.remove('active')
            }
            as[i].classList.add('active')
        })
    }
    let isI = document.querySelectorAll('.icon-shoucang1')
    for (let k = 0; k < isI.length; k++) {
        let index = false
        isI[k].addEventListener('click',function (){
            index = !index
            if (index){
                this.style.color = '#f00'
            }else {
                this.style.color = '#fff'
            }
        })
    }
})