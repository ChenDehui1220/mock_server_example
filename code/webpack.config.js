module.exports = {
    entry: __dirname + '/mock/index.js',
    devServer: {
        proxy: {
            '/api/app/v1/**': {
                target: 'https://x-mall-api.beta2.hiiir-inc.com',
                changeOrigin: true,
                secure: false,
                pathRewrite: {}
            }
        }
    }
}
