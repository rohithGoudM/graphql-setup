const DBUser = require('../../models/user');

module.exports = (parent, args)=>{
	return DBUser.findById(args.id);
}