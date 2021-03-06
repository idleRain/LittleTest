/**
 * 侧边导航关闭折叠控制
 */
document.querySelector('.right .init').addEventListener('click', function () {
  axios.get('http://www.itcbc.com:8000/init/data').then(
    response => {
      if(response.data.code === 0) return toastr.success(response.data.message)
    }
  )
})
document.querySelector('.logout a').addEventListener('click',function(){
  if(confirm('确认退出登录吗？')){
    localStorage.removeItem('token')
    location.href = 'login.html'
  }
})


function toggleSlide() {
  $('.nav > li > a').on('click', function () {
    let childMenu = $(this).next('ul');
    childMenu.slideToggle(400);
    let icon = childMenu.prev().find('.toggle');
    if (icon.hasClass('open')) {
      icon.removeClass('open').addClass('close');
    } else {
      icon.removeClass('close').addClass('open');
    }
  })

  // 默认第一个菜单展开
  $('.nav > li > a').eq(0).trigger('click');

  // 所有子菜单切换时加背景色
  $('.nav ul a').on('click', function () {
    $(this).addClass('active')
    $('.nav ul a').not($(this)).removeClass('active');
  })

}

toggleSlide();

