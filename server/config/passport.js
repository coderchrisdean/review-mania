const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Configure Passport.js
passport.use(
  new LocalStrategy((username, password, done) => {
    // Replace this with your actual user authentication logic
    if (username === 'user' && password === 'password') {
      return done(null, { id: 1, username: 'user' });
    } else {
      return done(null, false, { message: 'Incorrect username or password' });
    }
  })
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Fetch user data from your database based on the id
  const user = { id: 1, username: 'user' }; // Replace with actual user data
  done(null, user);
});

// Express middleware to initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Routes for authentication
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
}));

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Protect routes that require authentication
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.render('dashboard');
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}
