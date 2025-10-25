import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/userModel.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/users/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        let user = await User.findOne({ email: email });

        if (user) {
            // User exists, ensure googleId is linked if they previously used email/pass
            if (!user.googleId) {
                user.googleId = profile.id;
                await user.save();
            }
            return done(null, user);
        } else {
            // Create a new user, profile is incomplete
            const adminEmails = process.env.ADMIN_EMAILS.split(',');
            const role = adminEmails.includes(email) ? 'admin' : 'user';

            const newUser = await User.create({
                googleId: profile.id,
                name: profile.displayName,
                email: email,
                role: role,
                isProfileComplete: false, // Profile is incomplete
            });
            return done(null, newUser);
        }
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Passport requires these methods for session management, even if we use stateless JWTs.
passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch(error) {
        done(error, null);
    }
});