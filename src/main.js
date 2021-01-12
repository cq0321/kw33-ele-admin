import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入elementui组件库
import ElementUI from 'element-ui';

// 引入elementui样式文件
import 'element-ui/lib/theme-chalk/index.css';

import "./styles/index.scss"
import "./styles/util.css"

import request from "@/api/request";
Vue.prototype.$axios = request;

// 全局注册 element 组件库
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
