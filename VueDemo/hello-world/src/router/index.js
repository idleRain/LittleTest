// 引入 Vue-router
import VueRouter from "vue-router";
// 引入组件
import HomeComponent from "@/pages/HomeComponent";
import AboutComponent from "@/pages/AboutComponent";

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutComponent
        },
        {
            path: '/home',
            component: HomeComponent
        }
    ]
})