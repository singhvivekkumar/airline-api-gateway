const express = require('express');
const bodyParser = require('body-parser');
const { PORT, BOOKING_SERVICE } = require('./config/serverConfig');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { rateLimit } = require('express-rate-limit');

const startServer = () => {

	const app = express();

	const limiter = rateLimit({
		windowMs: 2 * 60 * 1000, // 15 minutes
		limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
		standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
		legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	})
	// to see every log
	app.use(morgan("combined"));

	// Apply the rate limiting middleware to all requests.
	app.use(limiter)

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	app.use('/bookingservice', createProxyMiddleware( { target: BOOKING_SERVICE, changeOrigin: true }));

	app.get('/api/home', (req, res) => {
		res.status(200).json({
			message: "successfully loged in api gateway"
		})
	});

	app.listen(PORT, ()=> {
		console.log("start server on :",PORT)
	})
}

startServer();