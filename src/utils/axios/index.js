import axios from 'axios'
import {Message} from 'element'

let request = axios.create({
    timeout : 0,
    baseURL : process.env.VUE_APP_BASE_URL,
    withCredentials : true
})

//request 拦截
request.interceptors.request.use( 
    config => {
        //config处理
        return config;
    }, 
    error => {
        //错误处理
        return Promise.reject(error)
    }
)

//response 拦截
request.interceptors.response.use( 
    response => {
        //response处理
        //接口状态妈维护在这里完成
        
        return response;
    }, 
    error => {
        //错误处理
        return Promise.reject(error)
    }
)

export default request;