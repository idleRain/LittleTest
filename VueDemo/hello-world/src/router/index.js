// 引入 Vue-router
import VueRouter from "vue-router";
// 引入组件
import HomeComponent from "@/pages/HomeComponent";
import AboutComponent from "@/pages/AboutComponent";
import HomeNews from "@/pages/HomeNews";
import HomeMessage from "@/pages/HomeMessage";
import MessageDetail from "@/pages/MessageDetail";

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutComponent
        },
        {
            path: '/home',
            component: HomeComponent,
            children:[
                {
                    path:'news',
                    component:HomeNews
                },
                {
                    path:'message',
                    component:HomeMessage,
                    children:[{
                        path:'detail',
                        component:MessageDetail
                    }]
                }
            ]
        }
    ]
})