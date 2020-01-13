const User = `
	type User {
		id: ID!
		username: String #lowercaseString
		authId: ID
		name: String
		userRatings: [UserRating]
	}
	extend type Query {
		userById: User
		usersByUsername: [User]
	}
`;

module.exports = User;