// 混入 lib
// 可以把多个组件公用的配置提取成一个混入对象

export const hunhe = {
    // 混入的 data 和自身的 data 会冲突，以组件自身的为主
    data(){
        return {
            name:'小丁',
            age:18
        }
    },
    methods:{
        showMsg(){
            alert(this.msg)
        }
    },
    //混入的生命周期钩子和自身的生命周期钩子不冲突，都会执行，但会先执行混入的
    mounted() {
        console.log('hello world')
    }
}