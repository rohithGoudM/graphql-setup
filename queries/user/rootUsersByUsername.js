const DBUser = require('../../models/user');

module.exports = (parent, args) => {
	return DBUser.find({username: {$regex:args.userName,$options: 'i'}});
}