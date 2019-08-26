import Vue from 'vue'
import App from './App.vue'
//为更加方便文件管理，我们把 router和store 独立到他们自己的一个文件夹下面
import router from './router'
import store from './store'
import axios from 'axios'
import MainHeader from './components/MainHeader'
import MainAside from './components/MainAside'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts ;
Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:3000";
Vue.prototype.axios = axios;
Vue.component("main-header",MainHeader);
Vue.component("main-aside",MainAside);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
