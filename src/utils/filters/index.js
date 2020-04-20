/* 
    文件用来向外导出Vue过滤器，并在plugins中注册
*/ 
const filters =  {
    test (val) {
        return val + '1'
    }

}


export default filters