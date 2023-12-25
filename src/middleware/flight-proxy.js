const { createProxyMiddleware } = require("http-proxy-middleware");
const { SEARCH_SERVICE } = require("../config/serverConfig");
const client = require("../redis/client");

const cacheData = {
	key: "",
	value: "",
};

const updateCache = async () => {
	//update redis
	await client.set(`flightQuery:${cacheData.key}`, cacheData.value);
	await client.expire(`flightQuery:${cacheData.key}`, 300);
	console.log(cacheData.key, cacheData.value, "hiii");
};

const flightProxy = createProxyMiddleware({
	target: SEARCH_SERVICE,
	changeOrigin: true,
	//Subscribe to http-proxy events with the on option:
	onProxyReq: (proxyReq, req, res) => {
		// Modify the request body if needed
		if (req.body) {
			cacheData.key = JSON.stringify(req.query);
			proxyReq.setHeader("Content-Type", "application/json");
			proxyReq.setHeader(
				"Content-Length",
				Buffer.byteLength(JSON.stringify(req.body))
			);
			proxyReq.write(JSON.stringify(req.body));
			// console.log(cacheData.key, req.query);
		}
	},
	onProxyRes: (proxyRes, req, res) => {
		proxyRes.addListener("data", async (chunk) => {
			cacheData.value = JSON.stringify(JSON.parse(chunk));
			await updateCache();
		});
	},
});


module.exports =  flightProxy
