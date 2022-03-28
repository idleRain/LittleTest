// 1. 初始数据
const sliderData = [
    {url: './images/slider01.jpg', title: '对人类来说会不会太超前了？', color: 'rgb(100, 67, 68)'},
    {url: './images/slider02.jpg', title: '开启剑与雪的黑暗传说！', color: 'rgb(43, 35, 26)'},
    {url: './images/slider03.jpg', title: '真正的jo厨出现了！', color: 'rgb(36, 31, 33)'},
    {url: './images/slider04.jpg', title: '李玉刚：让世界通过B站看到东方大国文化', color: 'rgb(139, 98, 66)'},
    {url: './images/slider05.jpg', title: '快来分享你的寒假日常吧~', color: 'rgb(67, 90, 92)'},
    {url: './images/slider06.jpg', title: '哔哩哔哩小年YEAH', color: 'rgb(166, 131, 143)'},
    {url: './images/slider07.jpg', title: '一站式解决你的电脑配置问题！！！', color: 'rgb(53, 29, 25)'},
    {url: './images/slider08.jpg', title: '谁不想和小猫咪贴贴呢！', color: 'rgb(99, 72, 114)'},
]

const img = document.querySelector('.slider-wrapper img')
const btn1 = document.querySelector('.prev')
const btn2 = document.querySelector('.next')
const text = document.querySelector('.slider-footer p')
const footer = document.querySelector('.slider-footer')
let index = 0
btn1.addEventListener('click', () => {
    d(true)
})
btn2.addEventListener('click', () => {
    d(false)
})
setInterval(() => {
    d(false)
}, 2000)

function d(flag) {
    flag ? index-- : index++
    index < 0 ? index = sliderData.length - 1 : index
    index === sliderData.length ? index = 0 : index
    img.src = sliderData[index].url
    text.innerHTML = sliderData[index].title
    footer.style.backgroundColor = sliderData[index].color
    f()
}

const lis = document.querySelectorAll('.slider-indicator li')
function f() {
    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active')
    }
    lis[index].classList.add('active')
}