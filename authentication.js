const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2');

const User = require('./models/User');
const {GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET} = require('./keys');

const isSerializedJSON = (str) =>
  str[0] === '{' && str[str.length - 1] === '}';

const init = () => {
	passport.serializeUser((user, done)=>{
		done(null, typeof user === 'string' ? user : JSON.stringify(user));
	});

	passport.deserializeUser((data, done)=>{
		if(isSerializedJSON(data)){
			let user;

			try {
				user = JSON.parse(data);
			} catch (err) {}

			if (user && user.id && user.createdAt){
				return done(null,user);
			}
		}
	});

	passport.use(
		new GoogleStrategy({
			clientID: GOOGLE_OAUTH_CLIENT_ID,
			clientSecret: GOOGLE_OAUTH_CLIENT_SECRET,
			callbackURL: "/auth/google/callback"
		},
		(token, tokenSecret, profile, done)=>{
			User.findOne({googleProviderId: profile.id}).then((currentUser)=>{
				if(currentUser){
					done(null, currentUser);
				}else{
					const name =
					profile.displayName ||
					profile._json.name ||
					profile._json.screen_name ||
					profile.username ||
					'';
					const user = {
						username: null,
						email: (profile.emails &&
							profile.emails.length > 0 &&
							profile.emails[0].value) ||
						null,
						googleProviderId: profile.id,
						name: name
					}
					new User(user).save().then((newUser)=>{
						done(null, newUser);
					});
				}
			});
			
		})
	);
};

module.exports = {
	init
};