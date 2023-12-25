const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { rateLimit } = require("express-rate-limit");
const cors = require("cors");

const { PORT } = require("./config/serverConfig");
const router = require("./routes");
// const client = require("./redis/client");

const startServer = () => {
	const app = express();

	const limiter = rateLimit({
		windowMs: 2 * 60 * 1000, // 15 minutes
		limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
		message: { message: "To many request you block by rate limiter"}
	});

	// to see every log
	app.use(morgan("combined"));

	// cors
	app.use(cors());

	// Apply the rate limiting middleware to allow number of requests.
	app.use(limiter);

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	//All the routes handled by here
	app.use("/", router);

	app.listen(PORT, async () => {
		console.log("start server on :", PORT);
		// redis
		// const result = await client.get("user:1");
		// const result = await client.set("msg:1", "hii from api gateway");
		// const result = await client.expire("msg:1", 10);
		// console.log(result);
	});
};

startServer();
