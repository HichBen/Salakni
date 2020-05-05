import * as mongoose from 'mongoose';
export interface IProvider extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    skills: string[];
    photo: string;
    phone: string;
    address: string;
    description: string;
}
declare const Provider: mongoose.Model<IProvider, {}>;
export default Provider;
