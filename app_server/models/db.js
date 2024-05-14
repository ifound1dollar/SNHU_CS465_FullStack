const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;
const readLine = require('readline');

//Build connection string and set connection timeout (in milliseconds).
const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {}), 1000);
}

//Monitor connection events: Start connection, error, and end connection.
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ', err);
});
mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected from ${dbURI}`);
});

//Windows-specific listener to emit SIGINT.
if (process.platform === 'win32') {
    const r1 = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    r1.on('SIGINT', () => {
        process.emit('SIGINT');
    });
}

//Anonymous function for graceful database shutdown.
const gracefulShutdown = (msg) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
    });
};



//BELOW ARE EVENT LISTENERS TO PROCESS GRACEFUL SHUTDOWNS

//Shutdown invoked by nodemon signal.
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
});

//Shutdown invoked by app termination.
process.on('SIGINT', () => {
    gracefulShutdown('app termination');
    process.exit(0);
});

//Shutdown invoked by container termination.
process.on('SIGTERM', () => {
    gracefulShutdown('app shutdown');
    process.exit(0);
});



//FINALLY, make initial connection to database.
connect();

//Once database is connected, import Mongoose schema defined in 'travlr.js' module, then export mongoose.
require('./travlr');
module.exports = mongoose;