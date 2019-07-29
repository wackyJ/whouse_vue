import Vue from 'vue'
import Router from 'vue-router'
import routeConfig from './routeConfig/index.js'

Vue.use(Router)

let routeMain = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routeConfig
  })

export default routeMain



// routeMain.beforeEach((to, from, next) => {
//     let codelist = api 
//     if(to.meta.code==='1001'){
//       console.log('你的权限不足');
//       next({name:'about'})
//     }else{
//       next()
//     }
    
//     })
    