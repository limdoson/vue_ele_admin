import axios from 'axios'

let request = axios.create({
    timeout : 0,
    baseURL : process.env.VUE_APP_BASE_API,
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
        
        return response;
    }, 
    error => {
        //错误处理
        return Promise.reject(error)
    }
)

export default request;