import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("@/views/login/Login");
const Home = () => import("@/views/home/Home");

Vue.use(VueRouter);

const routes = [
    {
        path: "",
        redirect: "/login"
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/home",
        component: Home
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

// 全局前置守卫
/**
 * to：即将要进入的目标路由对象
 * from：当前导航正要离开的路由
 * next：执行下一步
 */
router.beforeEach((to, from, next) => {
    if (to.path === "/login") return next();
    const Token = window.sessionStorage.getItem("token");
    if (!Token) return next("/login");
    next();
});

export default router;
