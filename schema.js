const {
	makeExecutableSchema,
	addSchemaLevelResolveFunction
} = require('graphql-tools');
const { merge } = require('lodash');

//types
const User = require('./types/User');
//queries
const userQueries = require('./queries/user');
//mutations

const Root = `
	type Query{
		dummy: String
	}
	type Mutation{
		dummy: String
	}
	type Subscription{
		dummy: String
	}
	schema{
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
	],
	resolvers,
})

module.exports = schema;