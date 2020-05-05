import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IClient extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    phone: string;
    address: string;
    type: string;
    photo: string
};

const ClientSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a first name'
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    ptoto: {
        type: String
    },
    type: {
        type: String,
        default: 'client'
    }
});

const Client = mongoose.model<IClient>('Client', ClientSchema);
export default Client