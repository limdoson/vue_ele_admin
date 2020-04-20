import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	
]

const router = new VueRouter({
	mode : 'history',
  	routes
})

//全局路由守卫
router.beforeEach((to, from, next) => {
	next()
})

router.afterEach( (to,form) => {
	
})

export default router
