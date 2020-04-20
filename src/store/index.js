import Vue from 'vue'
import Vuex from 'vuex'
/* 
	store数据持久化插件,
	文档：https://www.npmjs.com/package/vuex-along
*/
import createVuexAlong from "vuex-along";

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
		createVuexAlong({
			name : process.env.VUE_STORE_NAME ? process.env.VUE_STORE_NAME : 'LeemDs',
			session :{
				list : ['number']
			}
		})
	]
})
