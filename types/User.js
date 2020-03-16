const User=`
	type User{
		id: ID!
		email: String!
		name: String!
		username: String!
		createdAt: String
		googleProviderId: String!
	}

	extend type Query {
		userById(userId: ID!): User
		usersByUsername(username: String!): [User]
	}
`;

module.exports = User;