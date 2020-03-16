const { Router } = require('express');

const googleAuthRoutes = require('./google');
const logoutRoutes = require('./logout');

const authRouter = Router();

authRouter.use('/google', googleAuthRoutes);
authRouter.use('/logout', logoutRoutes);

module.exports = authRouter;