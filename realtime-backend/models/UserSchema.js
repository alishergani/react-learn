const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: String,
    image: String,
    desc: String,
    price: Number,
    status: String
});
const Users = mongoose.model("Users", userScheme);
module.exports  =  Users;
