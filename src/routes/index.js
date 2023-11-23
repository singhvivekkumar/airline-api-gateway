const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const { requestAuthentication } = require('../middleware');
const { BOOKING_SERVICE, AUTH_SERVICE, SEARCH_SERVICE } = require('../config/serverConfig');

const router = express.Router();

router.use(
	'/bookingservice', 
	requestAuthentication, 
	createProxyMiddleware({
		target: BOOKING_SERVICE, 
		changeOrigin: true 
	})
);

router.use(
	'/auth', 
	createProxyMiddleware({
		target: AUTH_SERVICE, 
		changeOrigin: true 
	})
);

router.use(
	'/search', 
	createProxyMiddleware({
		target: SEARCH_SERVICE, 
		changeOrigin: true 
	})
);

router.get('/api/home', (req, res) => {
	res.status(200).json({
		message: "successfully loged in api gateway"
	})
});


module.exports = {
	router
}