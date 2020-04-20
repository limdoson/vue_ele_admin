import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
Vue.config.productionTip = false
//样式入口文件
import '@ast/css/app.less';

import plugins from './plugin'
Vue.use(plugins)

new Vue({
 	router,
  	store,
  	render: h => h(App)
}).$mount('#app')
