/* 
    文件用来向外导出plugins全局混入，并在main.js中use
*/ 
import filters from '@u/filters'
import directives from '@u/directives'
// import mixins from '@u/mixins'

//引入需要全局注册的组件，在此注册
import ldsForm from '@c/global/LdsForm'
export default {
    install (Vue,options) {
        //注册过滤器
        for (let key in filters) {
            Vue.filter(key, filters[key])
        }
        //注册指令
        for (let key in directives) {
            Vue.directive(key, directives[key])
        }
        //全局混入，需要时启用
        // Vue.mixin(mixins)

        //注册全局组件
        Vue.component('lds-form',ldsForm)
    }
}