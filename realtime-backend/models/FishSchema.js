const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fishesScheme = new Schema({
    name: String,
    image: String,
    desc: String,
    price: Number,
    status: String
});
const Fishes = mongoose.model("Fishes", fishesScheme);
module.exports  =  Fishes;
