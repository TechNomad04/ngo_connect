const mongoose = require('mongoose');

const authorize = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("MongoDb connected")).catch((err) => console.log(err))

}

module.exports = authorize;