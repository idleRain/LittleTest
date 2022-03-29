window.addEventListener('load', function () {
    const data = [
        {url: './images/slider01.jpg', title: '对人类来说会不会太超前了？', color: 'rgb(100, 67, 68)'},
        {url: './images/slider02.jpg', title: '开启剑与雪的黑暗传说！', color: 'rgb(43, 35, 26)'},
        {url: './images/slider03.jpg', title: '真正的jo厨出现了！', color: 'rgb(36, 31, 33)'},
        {url: './images/slider04.jpg', title: '李玉刚：让世界通过B站看到东方大国文化', color: 'rgb(139, 98, 66)'},
        {url: './images/slider05.jpg', title: '快来分享你的寒假日常吧~', color: 'rgb(67, 90, 92)'},
        {url: './images/slider06.jpg', title: '哔哩哔哩小年YEAH', color: 'rgb(166, 131, 143)'},
        {url: './images/slider07.jpg', title: '一站式解决你的电脑配置问题！！！', color: 'rgb(53, 29, 25)'},
        {url: './images/slider08.jpg', title: '谁不想和小猫咪贴贴呢！', color: 'rgb(99, 72, 114)'},
    ]
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    const img = document.querySelector('.slider-wrapper img')
    const footer = document.querySelector('.slider-footer')
    const text = footer.querySelector('p')
    let index = 0
    next.addEventListener('click', () => {
        fn(false)
    })
    prev.addEventListener('click', () => {
        fn(true)
    })

    // 图片状态
    function fn(flag) {
        flag ? index-- : index++
        if (index >= data.length) index = 0
        if (index < 0) index = data.length - 1
        img.src = data[index].url
        footer.style.backgroundColor = data[index].color
        text.innerHTML = data[index].title
        active()
    }

    //小圆点选中状态
    const lis = document.querySelectorAll('.slider-indicator li')

    function active() {
        document.querySelector('.active').classList.remove('active')
        lis[index].classList.add('active')
    }

    // 每两秒自动切换一张图片
    // setInterval(fn, 2000)
    let timerId = setInterval(() => {
        next.click()
    }, 2000)

    const slider = document.querySelector('.slider')
    // 鼠标移入事件
    slider.addEventListener('mouseenter', () => {
        clearInterval(timerId)
    })
    // 鼠标离开事件
    slider.addEventListener('mouseleave', () => {
        if(timerId) clearInterval(timerId)
        timerId = setInterval(() => {
            next.click()
        }, 2000)
    })
})