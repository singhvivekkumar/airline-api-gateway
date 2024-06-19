const express = require("express");

const { RequestAuthentication, UserProxy, FlightProxy, BookingProxy } = require("../middleware");

const router = express.Router();

router.use(
	"/bookingservice",
	RequestAuthentication.requestAuthentication,
	BookingProxy
);

router.use("/auth", 
	RequestAuthentication.testMiddleware, 
	UserProxy
);

router.use(
	"/search",
	RequestAuthentication.requestAuthentication,
	// FlightCache,
	FlightProxy
);

router.get("/health", (req, res) => {
	res.status(200).json({
		message: "successfully hitted api gateway",
	});
});

module.exports = router;
