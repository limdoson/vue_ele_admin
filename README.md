# vue_ele_admin

## Project setup
```
为了压缩项目打包的后的vender.js的大小，项目主要依赖都以cdn的方式载入，不参与打包构建
-如果为了在浏览器调试，需要使用vue-devTools，因为cdn载入依赖而无法激活vue-devTools，可将cdn依赖取消，改为npm安装依赖，在开发完成后再改为cdn依赖的方式

-tests 目录为unit-test的目录，有放了一个测试用的demo，如果需要测试，都在组件单元测试，都在该目录内完成
```

```
后台返回时间戳，前端如果需要处理，可以使用momentjs来处理，
如果需求不复杂，也可以直接自己在src/utils/filters/index，中写个过滤器，并注册到全局或在需要时引入，
目前项目中以momentjs处理[http://momentjs.cn/docs/](http://momentjs.cn/docs/)
```

```
src/components目录说明
- global目录为需要在全局注册的组件，全局注册组件/过滤器/自定义指令/全量引入的依赖等这些都在：src/plugin/index.js 中完成
- usering-import 为按需引入的组件
```

```
src/interface目录为接口封装目录
所有接口都建议封装在该文件夹内
```

```
src/router
src/store目录说明

index.js默认为全局性的文件，如果项目体量较大，请将router/store拆分为多个模块，放于modules文件夹中，便于维护
```

```
环境变量说明：
VUE_APP_BASE_URL ： axios请求的基本url，其中，前置的/api 根据自身项目的开发服务器代理甚至不同而不同
VUE_APP_FILE_UPLOAD_API :文件上传的地址
VUE_APP_FILE_SIZE_UPLOAD_LIMIT ：上传文件的大小限制，单位兆
VUE_APP_IMG_SIZE_UPLOAD_LIMIT ： 上传图片最大体积限制，单位兆
VUE_APP_FILE_UPLOAD_NAME ：上传时的name属性，根据后端需求调整
VUE_APP_FILE_UPLOAD_COUNT_LIMIT ： 允许同时上传的文件数量
VUE_APP_FILE_UPLOAD_ACCEPT_TYPE ： 允许上传的文件类型
```

```
基于elementui表单组件的二次封装，ldsForm，文档：[http://blog.coder-leem.com/documents/form.html](http://blog.coder-leem.com/documents/form.html)
```