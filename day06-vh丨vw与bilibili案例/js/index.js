const line = document.querySelector('#line')
const item = document.querySelector('.tabs-item')
item.addEventListener('click',function (e){
    if (e.target.tagName === 'A'){
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        // console.log(e.target.offsetLeft)
        line.style.left = (e.target.offsetLeft)  + 'px'
    }
})