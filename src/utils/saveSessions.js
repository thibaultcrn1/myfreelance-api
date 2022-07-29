const { SessionsSchema } = require('../database/schemas');

async function saveSessions(accessToken, refreshToken, email) {

    if(await SessionsSchema.findOne({ email: email })) {
        await SessionsSchema.findOneAndDelete({ email: email })
        
        const sessions = await new SessionsSchema({
            accessToken: accessToken,
            refreshToken: refreshToken,
            email: email
        })
        sessions.save()
        .catch((err) => console.log("saveSession: " + err));

    } else {

        const sessions = await new SessionsSchema({
            accessToken: accessToken,
            refreshToken: refreshToken,
            email: email
        })
        sessions.save()
        .catch((err) => console.log("saveSession: " + err));

    }

}

module.exports = { saveSessions };