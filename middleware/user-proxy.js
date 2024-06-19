const { createProxyMiddleware } = require("http-proxy-middleware");
const { AUTH_SERVICE } = require("../config/serverConfig");

const userProxy = createProxyMiddleware({
	target: AUTH_SERVICE,
	changeOrigin: true,
	onProxyReq: (proxyReq, req, res) => {
		if (req.body) {
			proxyReq.setHeader("Content-Type", "application/json");
			proxyReq.setHeader("Content-Length",Buffer.byteLength(JSON.stringify(req.body)));
			proxyReq.write(JSON.stringify(req.body));
		}
	}
});

module.exports = userProxy ;
