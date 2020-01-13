const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const schema = require('./schema');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://<dbuser>:<dbpassword>@<dblink>", { useMongoClient: true },function(){
  console.log("conneced to mongodb Atlas");
});

const server = new ApolloServer({ 
	schema
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});