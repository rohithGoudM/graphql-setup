const { model, Schema } = require('mongoose');

const userSchema = new Schema({
	username: String,
	password: String,
	email: String,
	createdAt: String,
	googleProviderId: String,
	name: String
});

module.exports = model('User', userSchema);