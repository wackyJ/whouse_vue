import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Repertory from './views/Repertory'
import OrderPage from './views/OrderPage'
import Setting from './views/Setting'
import ProductPage from './views/ProductPage'
import NotFound from './views/NotFound'
import Register from './views/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {path:"/",component:Index},
    {path:"/index",component:Index},
    {path:"/repertory",component:Repertory},
    {path:"/orderpage",component:OrderPage},
    {path:"/setting",component:Setting},
    {path:"/productpage",component:ProductPage},
    {path:"/register",component:Register},
    {path:"/*",component:NotFound}
  ]
})
