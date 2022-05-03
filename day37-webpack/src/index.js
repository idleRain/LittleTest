// 导入jquery第三方的包
import $ from 'jquery'

// 实现隔行变色的功能
$('li:odd').css('background-color', 'yellow');
$('li:even').css('background-color', 'purple');

// 设置背景图片
import img from './222.png'
$(".box").css('background',`url(${img})`)

// 导入css
import './1.css'
// 导入less
import './2.less'


// js装饰器
function info(target) {
    target.abc = '哈哈哈哈哈哈哈，这是新语法';
}

// 下面的语法，表示给Person加了一个abc属性
@info
class Person { }
  
conole.log(Person.abc);
