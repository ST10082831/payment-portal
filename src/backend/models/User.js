const mongoose = require('mongoose');

//User Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accountNumber: { type: String, required: true, unique: true },
    idNumber: { type: String, required: true, unique: true }
});


module.exports = mongoose.model('User', UserSchema);