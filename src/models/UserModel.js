const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        phone: { type: String, default: '' },
        address: { type: String, default: '' },
        avatar: { type: String, default: '' },
    },
    {
        timestamps: true
    }
);
const User = mongoose.model('User', userSchema);
module.exports = User;