const { Router } = require('express');

const middlewares = Router();

const bodyParser = require('body-parser');
middlewares.use(bodyParser.json());

const passport = require('passport');
middlewares.use(passport.initialize());
middlewares.use(passport.session());

// update user login details in cookie/session
// look at stackoverflow answer with the link given in spectrum github

module.exports = middlewares;