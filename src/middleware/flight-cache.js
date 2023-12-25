// const client = require('../redis/client');

// async function flightCache(req, res, next) {
// 	try {
// 		const cacheResults = await client.get(
// 			`flightQuery:${JSON.stringify(req.query)}`
// 		);
// 		if (cacheResults) {
// 			const results = JSON.parse(cacheResults);
// 			res.status(200).json({
// 				fromCache: true,
// 				data: results.data,
// 				success: results.success,
// 				err: results.err,
// 				message: results.message,
// 			});
// 		} else {
// 			next();
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		res.status(404).json({
// 			fromCache: true,
// 			data: {},
// 			success: false,
// 			err: { error },
// 			message: "some durinSg caching in server",
// 		});
// 	}
// }

// module.exports = flightCache;
