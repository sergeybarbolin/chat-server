/* eslint-disable @typescript-eslint/camelcase */
import mongoose, { Schema } from 'mongoose';
import isEmail from 'validator/lib/isEmail';

const UserModel = new Schema({
    email: {
        type: String,
        validate: [isEmail, 'Email invalid'],
        index: { unique: true },
        required: 'Email is required!'
    },
    fullname: {
        type: String,
        required: 'Fullname is required!'
    },
    password: {
        type: String,
        required: 'Password is required!'
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    avatar: String,
    confirm_hash: String,
    last_seen: Date, 
}, {
    timestamps: true
});
const User = mongoose.model('User', UserModel);

export default User;