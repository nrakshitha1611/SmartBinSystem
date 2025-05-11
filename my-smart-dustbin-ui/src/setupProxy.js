const { createProxyMiddleware } = require('http-proxy-middleware');

console.log("Proxy is working!");
module.exports = function(app) {
  app.use(
    '/macros',
    createProxyMiddleware({
      target: 'https://script.google.com',
      changeOrigin: true,
    //   secure: true,
    //   logLevel: 'debug', // optional: logs details to console
    })
  );
};
