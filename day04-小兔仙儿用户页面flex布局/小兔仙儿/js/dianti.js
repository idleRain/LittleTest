const elevator = document.querySelector('.xtx-elevator')
const bannerTop = document.querySelector('.banner')
//固定栏显现
window.addEventListener('scroll', function () {
    // console.log(bannerTop.offsetTop)
    const n = document.documentElement.scrollTop
    elevator.style.opacity = n >= bannerTop.offsetTop ? '1' : '0'
})
//返回顶部
const backTop = document.querySelector('#backTop')
backTop.addEventListener('click', function () {
    // document.documentElement.scrollTop = 0
    document.documentElement.scrollTo(0, 0)
})
// const news = document.querySelector('.recommend').offsetTop

// 点击跳转对应模块
elevator.addEventListener('click', function (e) {
    if (e.target.dataset.name) {
        //获取选中状态，如果没有则返回 null
        // const old = document.querySelector('.xtx-elevator-list .active')
        // if (old) old.classList.remove('active')
        // e.target.classList.add('active')
        // console.log(e.target.dataset.name)
        // 点击跳转对应模块
        document.documentElement.scrollTop = document.querySelector(`.${e.target.dataset.name}`).offsetTop + 1
    }
})
//页面滚动对应位置 ， 固定栏 为选中状态
window.addEventListener('scroll', function (e) {
    const old = document.querySelector('.xtx-elevator-list .active')
    if (old) old.classList.remove('active')

    const top = document.documentElement.scrollTop
    const recommend = document.querySelector('.recommend')
    const popular = document.querySelector('.popular')
    const hot = document.querySelector('.hot')
    const special = document.querySelector('.special')

    // console.log(top.offsetTop,recommend,popular,hot,special)
    if (top >= recommend.offsetTop && top < popular.offsetTop) {
        document.querySelector('[data-name=recommend]').classList.add('active')
    } else if (top >= popular.offsetTop && top < hot.offsetTop) {
        document.querySelector('[data-name=popular]').classList.add('active')
    } else if (top >= hot.offsetTop && top < special.offsetTop) {
        document.querySelector('[data-name=hot]').classList.add('active')
    } else if (top >= special.offsetTop) {
        document.querySelector('[data-name=special]').classList.add('active')
    }
})