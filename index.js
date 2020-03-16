// TRY apollo-server with passport and move on.

//Spectrum have created the token 
// I don't know where but after login i guess.

const { createServer } = require('http');
const express = require('express');
const mongoose = require('mongoose');

const { init } = require('./authentication.js');
const apolloServer = require('./apollo-server');
const middlewares = require('./routes/middlewares');
const authRoutes = require('./routes/auth');
const keys = require('./keys');
// const apiRoutes = require('./routes/api');

// GraphQLContext is to be here

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

mongoose.connect(keys.MongoDB, { useNewUrlParser: true })
	.then(() => {
		console.log("MongoDB Connected");
	});

init();

const app = express();

app.use(middlewares);

// Routes
app.use('/auth', authRoutes);
//app.use('api', apiRoutes);

// GraphQL middleware
apolloServer.applyMiddleware({ app });

// Redirect a request to the root path to the main app
app.use('/', (req, res) => {
  res.redirect(
    process.env.NODE_ENV === 'production' && !process.env.FORCE_DEV
      ? 'https://spectrum.chat'
      : 'http://localhost:3000'
  );
});

const httpServer = createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT);

console.log(`GraphQL API running at http://localhost:${PORT}/graphql`);