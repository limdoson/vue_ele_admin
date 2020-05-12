const webpack = require('webpack')
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

function resolve(dir) {
    return path.join(__dirname, dir)
}

//cdn资源地址
//@todo 这里最好做一份灾备方案，备份一份cdn文件到自己的服务器上
const cdn = {
    css: [
		'https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css'
	],
    js: [
        'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
        'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
        'https://cdn.bootcss.com/vuex/3.1.3/vuex.min.js',
		'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
		'https://cdn.bootcss.com/element-ui/2.13.0/index.js',
		'https://cdn.bootcss.com/echarts/4.7.0/echarts.min.js'
    ]
}
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV == 'development' ? './' : './',
	//开发环境请求代理
    devServer: {
        port: 8888,
        open: true,
		proxy :  {
			'/api' : {
				target : process.env.NODE_ENV == 'development' ?  'http://192.168.1.31:8080' : 'http://119.23.244.55:8080',
				changeOrigin : true,
				ws : true,
				pathRewrite : {
					"^/api" : ''
				}
			} 
		} 
	},
	css : {
		extract : false
	},
    productionSourceMap: false,
    lintOnSave: false,
    chainWebpack: config => {
		//删除prefetch预加载模块
		config.plugins.delete('prefetch');
		config.plugins.delete('preload');
		//快捷目录配置
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@c', resolve('src/components'))
            .set('@ast', resolve('src/assets'))
            .set('@u',resolve('src/utils'))
            .set('@v',resolve('src/views'))
			.set('@itf',resolve('src/interface'))
		config.entry.app = ["babel-polyfill", "./src/main.js"]
		//以cdn的方式引入部分资源，index.html中引入
		config.plugin('html')
			.tap(args => {
				args[0].cdn = cdn;
				return args;
			});
		//生产环境打包，使用分析包分析工具
		if (process.env.NODE_ENV == 'production') {
			config
        	.plugin('webpack-bundle-analyzer')
        	.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        	.end()
      		

		}

    },
	//webpack配置
	configureWebpack : (config) => {
		//配合cnd 设置引入的模块的名称
		config.externals = {
			'vue': 'Vue',
			'vuex': 'Vuex',
			'vue-router': 'VueRouter',
			'axios': 'axios',
			'element-ui': 'ELEMENT',
			"echarts": "echarts"
		}
		/* 
			gzip压缩
		*/
		config.plugins.push(
			new CompressionWebpackPlugin({
				filename: '[path].gz[query]',
				algorithm: 'gzip',
				test: /\.js$|\.html$|\.css/, //匹配文件名
				threshold: 10240,//对超过10k的数据压缩
				deleteOriginalAssets: false //不删除源文件
			})
		)
		//生产环境去除console信息
		if (process.NODE_ENV == 'production') {
			let optimization = {
				minimizer : [new UglifyJsPlugin({
					uglifyOptions: {
						warnings: false,
						compress: {
							drop_debugger: true, // 注释console
							drop_console: true,
							pure_funcs:['console.log','console.info'] // 移除console
						},
					},
				})]
			}
			
			//合并选项
			Object.assign(config, {
				optimization,
			})
		}
	}
}