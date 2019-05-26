import mongoose from 'mongoose';

const MONGO_USERNAME = 'gj';
const MONGO_PASSWORD = 'as112233';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'login_system';

// const {
//     MONGO_USERNAME,
//     MONGO_PASSWORD,
//     MONGO_HOSTNAME,
//     MONGO_PORT,
//     MONGO_DB
// } = process.env;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

// mongoose.set('useCreateIndex', true);
// mongoose.connect(url, { useNewUrlParser: true });
mongoose.connect(url, options).then(function () {
    console.log('MongoDB is connected');
})
.catch(function (err) {
    console.log(err);
});