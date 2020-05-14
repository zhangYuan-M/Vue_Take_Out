module.exports = {
	/* webpack-dev-server 相关配置 */
	devServer: {
		host: '127.0.0.1',
		// port: 4000,
		proxy: {
			'/api': {
				// 匹配所有以 '/api'开头的请求路径
				target: 'http://localhost:4000', // 代理目标的基础路径
				changeOrigin: true, // 支持跨域
				secure: false,
				pathRewrite: {
					// 重写路径: 去掉路径中开头的'/api'
					'^/api': ''
				}
			}
		}
	}
}
