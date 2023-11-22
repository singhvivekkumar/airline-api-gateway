const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	PORT: process.env.PORT,
	BOOKING_SERVICE: process.env.BOOKING_SERVICE,
}