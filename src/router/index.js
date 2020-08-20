import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/common/login/Login'

// const Login = () => '@/components/common/login/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
