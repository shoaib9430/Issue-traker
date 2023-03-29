const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://shoaibakhtar9430:Oi4Chtfh75FWCQGe@cluster0.mhs8ysz.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;