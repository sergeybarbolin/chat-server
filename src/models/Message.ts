import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
    text: {
        type: String;
        requre: true;
    };
    dialog: {
        type: Schema.Types.ObjectId;
        ref: String;
        requre: true;
    };
    unread: {
        type: Boolean
    }
}

const MessageModel = new Schema({
    author: String,
    partner: String,
    text: String,
    dialog: String,
    unreaded: Boolean
}, {
    timestamps: true
});
const Message = mongoose.model<IMessage>('Message', MessageModel);

export default Message;