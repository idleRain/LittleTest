// 引入 Vue-router
import VueRouter from "vue-router";
// 引入组件
import HomeComponent from "@/pages/HomeComponent";
import AboutComponent from "@/pages/AboutComponent";
import HomeNews from "@/pages/HomeNews";
import HomeMessage from "@/pages/HomeMessage";
import MessageDetail from "@/pages/MessageDetail";

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutComponent,
            meta:{title:'关于'}
        },
        {
            path: '/home',
            component: HomeComponent,
            meta:{title:'主页'},
            children: [
                {
                    path: 'news',
                    component: HomeNews,
                    meta: {isAuth: true,title:'新闻'}
                },
                {
                    path: 'message',
                    component: HomeMessage,
                    meta: {isAuth: true,title:'消息'},
                    children: [{
                        path: 'detail/:id/:content',
                        component: MessageDetail,
                        meta:{isAuth:true,title:'消息详情'}
                    }]
                }
            ]
        }
    ]
})
// 全局前置路由守卫，初始化的时候被调用，每次切换之后被调用
router.beforeEach((to, from, next) => {
    console.log(to, from, next)
    if (to.meta.isAuth) {
        if (localStorage.getItem('userId') === '小丁') {
            next()
        } else {
            alert('用户不对，看不了')
        }
    } else {
        next()
    }
})
// 全局后置路由守卫，初始化的时候被调用，每次切换之前被调用
router.afterEach((to) => {
    document.title = to.meta.title || '小毕宰制系统'
})

export default router