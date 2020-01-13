const UserRating = `
	type UserRating {
		id: ID!
		userId: ID!
		rating: String
		genre: String
		movies: [String]
	}
`;

module.exports = UserRating;