import Vue from 'vue'
import Vuex from 'vuex'
/* 
	store数据持久化插件,需要时安装
	文档：https://www.npmjs.com/package/vuex-along
*/
Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
		number : 0
  	},
  	mutations: {
		testMut (state,payload) {
			state.number = payload
		}
  	},
  	actions: {
		
  	},
  	modules: {
		
	},
	plugins: [
		
	]
})
