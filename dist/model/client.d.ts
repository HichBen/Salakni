import * as mongoose from 'mongoose';
export interface IClient extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    phone: string;
    address: string;
    type: string;
    photo: string;
}
declare const Client: mongoose.Model<IClient, {}>;
export default Client;
