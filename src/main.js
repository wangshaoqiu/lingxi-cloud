
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import ElementUI from 'element-ui';
import './element-variables.scss'

import '@/permission'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'


import '../static/qiniu.js';




Vue.use(ElementUI);
Vue.config.productionTip = false


Vue.use(ArgonDashboard)
Vue.prototype.baseURL = process.env.BASE_API

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
