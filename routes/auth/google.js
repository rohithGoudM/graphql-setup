const passport = require('passport');
const { Router } = require('express');

const googleAuthRouter = Router();

const IS_PROD = process.env.NODE_ENV === 'production';
const FALLBACK_URL = IS_PROD
// https once ssl certificate is issued
  ? 'http://morvec.in/home'
  : 'http://localhost:3000/home';

googleAuthRouter.get('/', passport.authenticate('google', {
	scope: 'profile email'
}));


//there are many more options in callback
// like res.cookie and authenticating and tokens
googleAuthRouter.get('/callback', passport.authenticate('google'), (req, res)=>{
	res.redirect(FALLBACK_URL);
});


module.exports = googleAuthRouter;