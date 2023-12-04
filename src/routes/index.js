const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const { RequestAuthentication } = require('../middleware');
const { BOOKING_SERVICE, AUTH_SERVICE, SEARCH_SERVICE } = require('../config/serverConfig');

const router = express.Router();

router.use(
	'/bookingservice', 
	RequestAuthentication.requestAuthentication,
	createProxyMiddleware({
		target: BOOKING_SERVICE,
		changeOrigin: true,
		onProxyReq: (proxyReq, req, res) => {
			// Modify the request body if needed
			if (req.body) {
			  const bodyData = JSON.stringify(req.body);
			  proxyReq.setHeader('Content-Type', 'application/json');
			  proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
			  proxyReq.write(bodyData);
			}
		},
	})
);

router.use(
	'/auth',
	RequestAuthentication.testMiddleware,
	createProxyMiddleware({
		target: AUTH_SERVICE,
		changeOrigin: true,
		onProxyReq: (proxyReq, req, res) => {
			// Modify the request body if needed
			if (req.body) {
			  const bodyData = JSON.stringify(req.body);
			  proxyReq.setHeader('Content-Type', 'application/json');
			  proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
			  proxyReq.write(bodyData);
			}
		},
	})
);

router.use(
	'/search',
	RequestAuthentication.requestAuthentication,
	createProxyMiddleware({
		target: SEARCH_SERVICE, 
		changeOrigin: true,
		onProxyReq: (proxyReq, req, res) => {
			// Modify the request body if needed
			if (req.body) {
			  const bodyData = JSON.stringify(req.body);
			  proxyReq.setHeader('Content-Type', 'application/json');
			  proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
			  proxyReq.write(bodyData);
			}
		},
	})
);

router.get('/api/home', (req, res) => {
	res.status(200).json({
		message: "successfully hitted api gateway"
	})
});


module.exports = {
	router
}