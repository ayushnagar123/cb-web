const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook')
const GithubStrategy = require('passport-github')
const { Users } = require('./db')

passport.use(
  new LocalStrategy((username, password, done) => {
    Users.findOne({
      where: {
        username,
      },
    })
      .then((user) => {
        if (!user) {
          return done(new Error('Username invalid'))
        }

        if (user.password != password) {
          return done(null, false)
        }

        done(null, user)
      })
      .catch(done)
  }),
)

passport.use(
  new FacebookStrategy(
    {
      clientID: '364644424248410',
      clientSecret: 'dc267d534f87e9ae65555ba392a289ce',
      callbackURL: 'http://localhost:8787/login/facebook/callback',
    },
    (accessToken,refreshToken,profile,done)=>{
      Users.findCreateFind({
        username: profile.id,
        fbAccessToken: accessToken,
        
      },{
        where: {
          username: profile.id,
        }
      }).then((user)=>{
        done(null,user)
      })
      .catch(done)
    },
  ),
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((userId, done) => {
  Users.findOne({
    where: {
      id: userId,
    },
  })
    .then((user) => done(null, user))
    .catch(done)
})

module.exports = passport
