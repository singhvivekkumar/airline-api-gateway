const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { rateLimit } = require('express-rate-limit');

const { PORT } = require('./config/serverConfig');
const { router } = require('./routes');

const startServer = () => {

	const app = express();

	const limiter = rateLimit({
		windowMs: 2 * 60 * 1000, // 15 minutes
		limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	})

	// to see every log
	app.use(morgan("combined"));

	// Apply the rate limiting middleware to allow number of requests.
	app.use(limiter)

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	//All the routes handled by here
	app.use('/', router);
	

	app.listen(PORT, ()=> {
		console.log("start server on :",PORT)
	})
}

startServer();