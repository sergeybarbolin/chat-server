/* eslint-disable @typescript-eslint/camelcase */
import mongoose, { Schema, Document } from 'mongoose';
import isEmail from 'validator/lib/isEmail';

export interface IUser extends Document {
    email: string;
    fullname: string;
    password: string;
    confirmed: boolean;
    avatar: string;
    confirm_hash: string;
    last_seen: Date;
}

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
const User = mongoose.model<IUser>('User', UserModel);

export default User;