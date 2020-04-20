const webpack = require('webpack')
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
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
    configureWebpack: {

    },
    productionSourceMap: false,
    lintOnSave: false,
    chainWebpack: config => {
		//快捷目录配置
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@c', resolve('src/components'))
            .set('@ast', resolve('src/assets'))
            .set('@u',resolve('src/utils'))
            .set('@v',resolve('src/views'))
            .set('@cfg',resolve('src/config'))
			.set('@itf',resolve('src/interface'))
		config.entry.app = ["babel-polyfill", "./src/main.js"]
    },
	//webpack配置
	configureWebpack : (config) => {

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
				optimization
			})
		}
	}
}