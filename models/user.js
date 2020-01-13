const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	authId: String,
	name: String,
	// createdAt,
});

module.exports = mongoose.model('user', userSchema);