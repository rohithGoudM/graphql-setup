const userById = require('./rootUserById');
const usersByUsername = require('./rootUsersByUsername');

const userRatings = require('./userRatings');

module.exports = {
	Query: {
		userById,
		usersByUsername
	},
	User: {
		userRatings
	}
};