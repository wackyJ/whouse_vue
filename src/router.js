import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Register from './views/Register'
import Index from './views/Index'
import Repertory from './views/Repertory'
import OrderPage from './views/OrderPage'
import Setting from './views/Setting'
import ProductPage from './views/ProductPage'
import NotFound from './views/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {path:"/",component:Login,},
    {path:"/login",component:Login},
    {path:"/register",component:Register},
    {path:"/index",component:Index,meta: {requireLogin: true}},
    {path:"/repertory",component:Repertory,meta: {requireLogin: true}},
    {path:"/orderpage",component:OrderPage,meta: {requireLogin: true}},
    {path:"/setting",component:Setting,meta: {requireLogin: true}},
    {path:"/productpage",component:ProductPage,meta: {requireLogin: true}},
    {path:"/*",component:NotFound}
  ]
})

export default router;
