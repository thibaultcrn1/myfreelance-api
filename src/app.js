const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

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

app.use('/api', routes);

app.listen(PORT, () => console.log('API Running on port: ' + PORT));