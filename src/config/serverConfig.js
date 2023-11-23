const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	PORT: process.env.PORT,
	BOOKING_SERVICE: process.env.BOOKING_SERVICE,
	AUTH_SERVICE: process.env.AUTH_SERVICE,
	SEARCH_SERVICE: process.env.SEARCH_SERVICE,
	AUTHENICATE_URL: process.env.AUTHENICATE_URL
}