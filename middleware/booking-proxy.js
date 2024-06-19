const { createProxyMiddleware } = require("http-proxy-middleware");
const { BOOKING_SERVICE } = require("../config/serverConfig");

const bookingProxy = createProxyMiddleware({
	target: BOOKING_SERVICE,
	changeOrigin: true,
	//Subscribe to http-proxy events with the on option:
	onProxyReq: (proxyReq, req, res) => {
		// Modify the request body if needed
		if (req.body) {
			proxyReq.setHeader("Content-Type", "application/json");
			proxyReq.setHeader("Content-Length", Buffer.byteLength(JSON.stringify(req.body)));
			proxyReq.write(JSON.stringify(req.body));
		}
	},
});

module.exports = bookingProxy ;
