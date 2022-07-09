require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes/index.js');
const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log(`[LOG] MongoDB (ONLINE) (myfreelance)`);
})

mongoose.connection.on('disconnected', () => {
    console.log(`[WARN] MongoDB (CONNECTION-LOST)`);
});

mongoose.connection.on('err', err => {
    console.log(`[ERROR] MongoDB Error \n${err.stack}`)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(PORT, () => console.log(`API : Running on PORT ${PORT}`));
