const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRatingSchema = new Schema({
	userId: String,
	rating: String,
	genre: String,
	movies: Array
});

const UserRating = mongoose.model('userRating', userRatingSchema);

module.exports = UserRating;