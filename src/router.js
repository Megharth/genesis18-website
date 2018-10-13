import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register'
import Department from './views/Department'
import Cart from './views/Cart'
import Orders from './views/Orders'
import { store } from './store/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeLeave() {
        document.querySelector('.navbar-dark').classList.remove('drop')
        document.querySelector('.navbar-dark').classList.remove('pull')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/department/:id',
      name: 'department',
      component: Department
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      beforeEnter: (destination, source, next) => {
        if(destination.name === "cart")
          if(!store.state.user)
            if(localStorage.getItem('user'))
              next()
            else
              next(false)
          else
            next()
      }
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      beforeEnter: (destination, source, next) => {
        if(destination.name === "orders")
          if(!store.state.user)
            if(localStorage.getItem('user'))
              next()
            else
              next(false)
          else
            next()
      }
    }
  ]
})
