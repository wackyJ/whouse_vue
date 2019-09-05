import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MainHeader from './components/MainHeader'
import MainAside from './components/MainAside'
import echarts from 'echarts'
//引入ElementUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype.$echarts = echarts ;
Vue.config.productionTip = false
//引入经过拦截过后的axios
import {instance} from './assets/axios.js'
Vue.prototype.axios = instance;

Vue.component("main-header",MainHeader);
Vue.component("main-aside",MainAside);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
