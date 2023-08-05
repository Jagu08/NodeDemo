const mongoose = require('mongoose');

const url = 'mongodb+srv://jagusuthar24:jagusuthar24@cluster0.ncfnsss.mongodb.net/';


mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('error',console.error.bind('Connection error'));

db.once('open', () => {
    console.log('Connected to database')
});


module.exports = db;