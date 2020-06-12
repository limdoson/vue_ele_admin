/* 
    文件用来向外导出plugins全局混入，并在main.js中use
*/ 
import filters from '@u/filters'
import directives from '@u/directives'
// import mixins from '@u/mixins'

//引入需要全局注册的组件，在此注册
import ElementUi from 'element-ui';
import moment from 'moment'
import ldsForm from '@c/global/LdsForm'
import ldsSearchCard from '@c/global/LdsSearchCard'
//gird-manager
import GridManager from 'gridmanager-vue';
import 'gridmanager-vue/css/gm-vue.css';
//gird-manager 二次封装完的组件
import ldsTable from '@c/global/LdsTable'
export default {
    install (Vue,options) {
        //引入ELEMENTUI
        Vue.use(ElementUi);
        Vue.use(GridManager);
        //momnet
        Vue.prototype.$moment = moment;
        //注册全局过滤器
        for (let key in filters) {
            Vue.filter(key, filters[key])
        }

        //注册全局指令
        for (let key in directives) {
            Vue.directive(key, directives[key])
        }
        
        //全局全局混入，需要时启用
        // Vue.mixin(mixins)

        //注册全局组件
        Vue.component('lds-form',ldsForm)
        Vue.component('lds-table',ldsTable)
        Vue.component('lds-search-card',ldsSearchCard)
    }
}