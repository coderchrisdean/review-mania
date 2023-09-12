const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session'); // if using sessions
// misc middleware

// Configure Passport.js
require('./config/passport')(passport);

// Initialize session
app.use(session({
  secret: 'JdUPUnpug3qRZO9XZTZxmH6FBJWwZJHMbSkohYYqU-do8q1Va7-sXimwYZb713LK',
  resave: true,
  saveUninitialized: true,
}));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// authentication routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Other routes and middleware

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
