const {connect} = require("mongoose");


async function connectDB() {
    if(!process.env.MONGO_URL) {
        console.error("MONGO URL is required");
        return;
    }

    try {
        await connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

module.exports = connectDB;