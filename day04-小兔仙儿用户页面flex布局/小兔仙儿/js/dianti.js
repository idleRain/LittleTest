const elevator = document.querySelector('.xtx-elevator')
const bannerTop = document.querySelector('.banner')

window.addEventListener('scroll', function () {
    console.log(bannerTop.offsetTop)
    const n = document.documentElement.scrollTop
    elevator.style.opacity = n >= bannerTop.offsetTop ? '1' : '0'
})
const backTop = document.querySelector('#backTop')
backTop.addEventListener('click',function (){
    document.documentElement.scrollTop = 0
})