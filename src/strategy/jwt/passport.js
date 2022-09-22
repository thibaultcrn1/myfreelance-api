const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const { UsersSchema } = require('../../database/schemas');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.ACCESS_TOKEN_SECRET;

module.exports = passport => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async(id, done) => {
        UsersSchema.findOne({ id: id })
        .then((user) => {
            done(null, user);
        })
        .catch((err) => {
            console.log(err);
            done(err, null);
        })
    });

    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        UsersSchema.findOne({ id: jwt_payload.id })
        .then(user => {
            if(user) return done(null, user);

            return done(null, false);
        })
        .catch(err => console.log(err));
    }));

};