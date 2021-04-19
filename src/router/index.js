import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import AddProduct from '@/views/AddProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/add-products',
    name: 'addProducts',
    component: AddProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = localStorage.access_token
  const forbiden = ['Home', 'addProducts']
  if (!currentUser && forbiden.includes(to.name)) {
    next({ name: 'Login' })
  } else if (currentUser && to.name === 'Login') {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
