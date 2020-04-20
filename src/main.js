import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
Vue.config.productionTip = false


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '@ast/css/element-theme/index.css'
Vue.use(ElementUI);

import '@ast/css/reset_ele.less';

import plugins from './plugin'
Vue.use(plugins)




new Vue({
 	router,
  	store,
  	render: h => h(App)
}).$mount('#app')
