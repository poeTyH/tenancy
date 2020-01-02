const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        proxy({
            // target: 'http://192.168.1.63:8080/springmvc-1',
            target: 'http://192.168.1.63:8080/springmvc-1',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    );
};