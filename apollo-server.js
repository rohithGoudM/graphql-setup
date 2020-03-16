const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');

// TODO- extend the ApolloServer to ProtectedApolloServer from all kinds of attacks
const server = new ApolloServer({
	schema,
	context: ({ req }) => ({ req })
});

module.exports = server;