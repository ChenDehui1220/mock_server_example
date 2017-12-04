module.exports = {
    devServer: {
        proxy: {
            '/api/app/v1/**': {
                target: 'https://x-mall-api.gamma.hiiir-inc.com',
                changeOrigin: true,
                secure: false,
                pathRewrite: {}
            }
        }
    }
}
