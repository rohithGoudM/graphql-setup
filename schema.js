const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');

//types
const User = require('./types/User');
const UserRating = require('./types/UserRating');

//queries
const userQueries = require('./queries/user');

//mutations

//subscriptions

const Root = `
	type Query {
		dummy: String
	}

	type Mutation {
		dummy: String
	}

	type Subscription {
		dummy: String
	}

	schema {
	    query: Query
	    mutation: Mutation
	    subscription: Subscription
  	}
`;

const resolvers = merge(
	{},
	//queries
	userQueries
	//mutations
	//subscriptions
);

const schema = makeExecutableSchema({
	typeDefs: [
		Root,
		User,
		UserRating
	],
	resolvers
});

module.exports = schema;