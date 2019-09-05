import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:false,
    userinfo:''
  },
  mutations: {
    //登录
    login(state){
      state.user=true;
    },
    //退出
    logout(state){
      state.user=false;
    }
  },
  actions: {

  }
})