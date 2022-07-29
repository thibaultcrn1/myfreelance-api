const { SessionsSchema } = require('../database/schemas');

async function saveAccessToken(refreshedToken, email) {    

    const newAccessToken = await SessionsSchema.findOneAndUpdate({ email: email}, { 
        accessToken: refreshedToken 
    });

    return newAccessToken.save()
    .catch((err) => console.log(err));

};

module.exports = { saveAccessToken };