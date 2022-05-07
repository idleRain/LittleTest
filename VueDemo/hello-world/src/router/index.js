import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import MyWork1 from "@/views/MyWork1";
import MyWork2 from "@/views/MyWork2";

const routes = [
    {path:'/work1',component:MyWork1},
    {path:'/work2',component:MyWork2},
    {path:'/',redirect: '/work1',}
]

const router =  new VueRouter({
    routes
})
export default router