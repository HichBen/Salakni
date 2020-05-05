import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IProvider extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    skills: string[];
    photo: string;
    phone: string;
    address: string;
    description: string;
};

const ProviderSchema = new Schema({
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
    type: {
        type: String,
        default: 'provider'
    },
    description: {
        type: String
    },
    phone: {
        type: String
    },
    photo: {
        type: String
    },
    skills: [{
        type: String,
        default: undefined
    }]
});

const Provider = mongoose.model<IProvider>('Provider', ProviderSchema);
export default Provider