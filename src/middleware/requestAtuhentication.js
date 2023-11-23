const { AUTHENICATE_URL } = require("../config/serverConfig");
const axios = require('axios');

const requestAuthentication = async (req, res, next) => {
	try {
		// console.log(req.headers['x-access-token']);
		const response = await axios.get(AUTHENICATE_URL, {
			headers: {
				'x-access-token': req.headers['x-access-token']
			}
		})
		if(response.data.success) {
			console.log("hii vivek");
			next();
		} else {
			return res.status(401).json({
				success: false,
				message: "The user is not authenticated"
			})
		}
	
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'something went wrong in token validation process',
			error: error
		})
	}
}

module.exports = requestAuthentication;