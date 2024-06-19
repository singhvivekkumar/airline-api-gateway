const { AUTHENICATE_URL } = require("../config/serverConfig");
const axios = require('axios');

const requestAuthentication = async (req, res, next) => {
	try {
		console.log(req.headers, req.query);
		const response = await axios.get(AUTHENICATE_URL, {
			headers: {
				'x-access-token': req.headers['x-access-token']
			}
		})
		if(response.data.success) {
			console.log("I am middleware from api gateway to validate authentication request");
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

const makeRequest = async (req, res) => {
	try {
		const response = await axios.get(AUTHENICATE_URL, {
			email: req.body.email,
			password: req.body.password
		})
		if(response.data.success) {
			console.log("hii vivek by middleware");
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

const testMiddleware = async (req, res, next) => {
	try {
		console.log("body", req.body);
		next();
		// return res.status(200).json({
		// 	message: "everything good in middleware testing"
		// })
	} catch (error) {
		return res.status(500).json({
			message: "something went wrong in middleware of api gateway",
			err: error
		})
	}
}

module.exports = {
	requestAuthentication,
	testMiddleware,
	makeRequest
};