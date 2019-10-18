const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
mongoose.connection.on('error', (err) => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

const connect = mongoose.connect("mongodb://localhost:27017/cod", { useNewUrlParser: true });

module.exports = connect