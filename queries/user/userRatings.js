const DBUserRating = require('../../models/userRating');

module.exports = (parent, args)=>{
	return DBUserRating.find({userId: parent.id});
}