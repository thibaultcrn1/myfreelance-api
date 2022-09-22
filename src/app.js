const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const Store = require('connect-mongo');
const passport = require('passport');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

const API_URI = "http://localhost:3001/api";

console.log(" _  _  _  _  ____  ____  ____  ____  __     __   __ _   ___  ____ ");
console.log("( \\/ )( \\/ )(  __)(  _ \\(  __)(  __)(  )   / _\\ (  ( \\ / __)(  __)");
console.log("/ \\/ \\ )  /  ) _)  )   / ) _)  ) _) / (_/\\/    \\/    /( (__  ) _) ");
console.log("\\_)(_/(__/  (__)  (__\\_)(____)(____)\\____/\\_/\\_/\\_)__) \\___)(____)");
console.log(' ');
console.log('[POST] ' + API_URI + "/auth/register");
console.log('[POST] ' + API_URI + "/auth/login");
console.log('[DELETE] ' + API_URI + "/auth/logout");
console.log('[PUT] ' + API_URI + "/auth/reset-password");
console.log('[PUT] ' + API_URI + "/auth/forgot-password");
console.log('[POST] ' + API_URI + "/auth/refreshtoken");
console.log('[GET] ' + API_URI + "/auth/users");
console.log(' ');
console.log('[POST] ' + API_URI + "/category/create");
console.log('[PUT] ' + API_URI + "/category/update");
console.log('[DELETE] ' + API_URI + "/category/delete");
console.log(' ');
console.log('[POST] ' + API_URI + "/invoice/create");
console.log('[PUT] ' + API_URI + "/invoice/update");
console.log('[DELETE] ' + API_URI + "/invoice/delete");
console.log(' ');
console.log('[POST] ' + API_URI + "/stock/create");
console.log('[PUT] ' + API_URI + "/stock/update");
console.log('[DELETE] ' + API_URI + "/stock/delete");
console.log(' ');

mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
    console.log('[LOG] MongoDB (Connected)');
})

mongoose.connection.on('disconnected', () => {
    console.log('[LOG] MongoDB (Disconnected)');
})

mongoose.connection.on('err', (err) => {
    return console.error(`[ERROR] MongoDB Error: ${err.stack}`);
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    cookie: {
        maxAge: 60000 * 60 * 24,
        httpOnly: false
    },
    resave: false,
    saveUninitialized: true,
    store: Store.create({ mongoUrl: process.env.MONGODB })
}));

app.use(passport.initialize());
app.use(passport.session());
require('./strategy/jwt/passport')(passport);

app.use(cors({
    origin: ['http://localhost:4200'],
    credentials: true,
}));

app.use('/api', routes);

app.listen(PORT, () => console.log('API Running on port: ' + PORT));