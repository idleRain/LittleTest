window.addEventListener('load', function () {
    let isActive = document.querySelector('.footer').querySelectorAll('a');
    let isAs = document.querySelector('.main').querySelectorAll('a')

    for (let j = 0; j < isAs.length; j++) {
        console.log(isAs.length)
        isAs[j].href = 'javascript:void(0);'
        isAs[j].addEventListener('click', function () {
            alert('页面尚未完成，更多内容敬请期待…')
        })
    }
    for (let i = 0; i < isActive.length; i++) {
        isActive[i].addEventListener('click', function () {
            document.querySelector('.footer').querySelector('.active').classList.remove('active')
            this.classList.add('active')
        })
    }
})