const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000, // 10 seconds timeout for initial connection
    socketTimeoutMS: 45000   // 45 seconds inactivity timeout on sockets
});

const db = mongoose.connection;

db.on('error', err => console.error('❌ MongoDB connection error:', err));

db.once('open', () => console.log('✅ MONGODB CONNECTED!'));

module.exports = db;
