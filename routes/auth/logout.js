const { Router } = require('express');

const IS_PROD = process.env.NODE_ENV === 'production';
const HOME = IS_PROD ? '/' : 'http://localhost:3000/';
const logoutRouter = Router();

logoutRouter.get('/', (req, res)=>{
	req.logout();
	return res.redirect(HOME);
});

module.exports = logoutRouter;