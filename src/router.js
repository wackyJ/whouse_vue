import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Repertory from './views/Repertory'
import OrderPage from './views/OrderPage'
import SetPage from './views/SetPage'
import ProductPage from './views/ProductPage'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:"/",component:Index},
    {path:"/index",component:Index},
    {path:"/repertory",component:Repertory},
    {path:"/orderpage",component:OrderPage},
    {path:"/setpage",component:SetPage},
    {path:"/productpage",component:ProductPage},
    {path:"/*",component:NotFound}
  ]
})
